import InputImages from 'components/InputFiles/Images/InputImages';
import React, { FormEventHandler, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setProductForm } from 'redux/actions/actionCreator';
import { 
    Form,
    FormHeader,
    FormFooter,
    ProductImageInput,
    ProductInputs,
    Input,
    Textarea,
    Button,
} from './ProductFormStyle';

interface IProductForm {
    id?: number,
    name: string,
    price: string,
    image: string,
    imgs: string[],
    category: string,
    collection: string,
    description_en: string,
    description_es: string,
    description_ru: string,
}

interface IProductFormElement {
    index: string,
    form: IProductForm,
    data?: any,
    edit: boolean,
    onClick: Function,
    onChange: Function,
    getFiles: Function
}

const ProductForm = (
    {index, form, edit, data, onClick, onChange, getFiles}: IProductFormElement
    ): JSX.Element => {
    const [files, setFiles] = useState<File[]>([]);

    useEffect( () => {
        getFiles(files, index);
    }, [files])

    const getProductForm = (form: any): IProductForm | undefined => {
        if(!form) return undefined;
        const registrationInputs: any = {};

        const formData = new FormData(form);
 
        const keys = formData.keys();
        Array.from(keys).forEach( key => {
            if(key === 'image') return;
            registrationInputs[key] = formData.get(key);
        })

        return registrationInputs;
    }

    const handleChange = (data: IProductForm | undefined) => {
        onChange({[index]: {...form, ...data}});
    }

    const handleImage = (file: File) => {
        setFiles([...files, file]);
        // files.push(file);
    }

    const deleteImage = (name: string) => {
        const filtered = files.filter( file => {
            return file.name !== name;
        });
        setFiles(filtered);
    }

    const setImages = (images: string[]) => {
        let elems = [];
        if(edit) {
            for(let index = 0; index< 4; index++) {
                    const url = images[index] ? `${process.env.REACT_APP_API_URL}/product/getImage/${form.id}/${images[index]}` : '';
                    elems.push(<InputImages key={index} url={url} getFile={handleImage} deleteFile={deleteImage} />)
            }
            return elems;
        } else {
            for(let index = 0; index< 4; index++) {
                elems.push(<InputImages key={index} url={''} getFile={handleImage} deleteFile={deleteImage} />)
            }
            return elems;
        }
    }

    // const setPreviewImage = (image: File) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         handleChange({...form, ...{image: reader.result as string}});
    //     };
    //     reader.readAsDataURL(image);
    // }

    // const getImage = (src: string) => {
    //     return <ProductImage src={src} alt="image" />
    // }

    // const getCategories = (categories: any) => {
    //     return categories.map( (category: any) => {
    //         return <option key={category.id} label={category.name} value={category.id}></option>
    //     })
    // }

    // const getCollections = (collections: any) => {
    //     return collections.map( (collection: any) => {
    //         return <option key={collection.id} label={collection.name} value={collection.id}></option>
    //     })
    // }

    return (
        <Form id="productForm" onChange={ (event: any) => {
            event.preventDefault();
            handleChange(getProductForm(event.target.form));
        }} >
            { edit ? '' : <Button onClick={ event => {
                    event.preventDefault();
                    onClick(index);
                }    
            }
            >x</Button>
            }
            <FormHeader>
                <ProductImageInput>
                    {setImages(form.imgs)}
                </ProductImageInput>
                <ProductInputs>
                    <Input name="name" type="text" placeholder="name" defaultValue={form.name} />
                    <Input name="price" type="number" placeholder="price" defaultValue={form.price} />
                    {/* <Select name="category" defaultValue={form.category} >
                        <option label="category" value={0}></option>
                        {getCategories(data.categories)}
                    </Select>
                    <Select name="collection" defaultValue={form.collection} >
                        <option label="collection" value={0}></option>
                        {getCollections(data.collections)}
                    </Select> */}
                </ProductInputs>
            </FormHeader>
            <FormFooter>
                <Textarea 
                    name="description_en" 
                    className="input description"
                    placeholder="description.en"
                    defaultValue={form.description_en}
                ></Textarea>
                <Textarea 
                    name="description_es" 
                    className="input description" 
                    placeholder="description.es"
                    defaultValue={form.description_es}
                ></Textarea>
                <Textarea 
                    name="description_ru" 
                    className="input description" 
                    placeholder="description.ru"
                    defaultValue={form.description_ru}
                ></Textarea>
            </FormFooter>
        </Form>
    )
}

export default ProductForm;
