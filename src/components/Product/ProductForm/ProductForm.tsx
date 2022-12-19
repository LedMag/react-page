import React, { FormEventHandler, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setProductForm } from 'redux/actions/actionCreator';
import { 
    Form,
    FormHeader,
    FormFooter,
    ProductImageInput,
    ProductImage,
    ProductInputs,
    Input,
    Select,
    Textarea,
    Button,
} from './ProductFormStyle';

interface IProductForm {
    name: string,
    price: string,
    image: string,
    category: string,
    collection: string,
    description_en: string,
    description_es: string,
    description_ru: string,
}

interface IProductFormElement {
    index: string,
    form: IProductForm,
    data: any,
    onClick: Function,
    onChange: Function,
}

const ProductForm = (
    {index, form, data, onClick, onChange}: IProductFormElement
    ): JSX.Element => {

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

    const handleImage = (event: any) => {
        const file: File = event?.target?.files[0];
        if(file && file.type.substring(0, 5) === 'image') {
            return setPreviewImage(file);
        }
    }

    const setPreviewImage = (image: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            handleChange({...form, ...{image: reader.result as string}});
        };
        reader.readAsDataURL(image);
    }

    const getImage = (src: string) => {
        return <ProductImage src={src} alt="image" />
    }

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
            <Button onClick={ event => {
                    event.preventDefault();
                    onClick(index);
                }    
            }
            >x</Button>
            <FormHeader>
                <ProductImageInput>
                    <Input
                        id="inputImage"
                        name="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                    />
                    {form.image ? getImage(form.image) : ''}
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
