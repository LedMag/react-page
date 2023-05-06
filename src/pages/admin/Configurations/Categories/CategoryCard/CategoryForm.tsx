import InputImages from 'components/InputFiles/Images/InputImages';
import React from 'react';
import { Button, FormHeader, CategoryImageInput, CategoryInputs, Input, FormFooter, Textarea, Form } from './CategoryFormStyle';

interface ICategoryForm {
    id?: number,
    name: string,
    // price: string,
    // image: string,
    // imgs: string[],
    // category: string,
    // collection: string,
    // description_en: string,
    // description_es: string,
    // description_ru: string,
    description: string,
    img: string
}

interface ICategoryFormElement {
    form: ICategoryForm,
}

const CategoryForm = (
    {form }: ICategoryFormElement
    ): JSX.Element => {
    // const [files, setFiles] = useState<File[]>([]);

    // useEffect( () => {
    //     getFiles(files, index);
    // }, [files])

    // const getCategoryForm = (form: any): ICategoryForm | undefined => {
    //     if(!form) return undefined;
    //     const registrationInputs: any = {};

    //     const formData = new FormData(form);

    //     const keys = formData.keys();
    //     Array.from(keys).forEach( key => {
    //         if(key === 'image') return;
    //         registrationInputs[key] = formData.get(key);
    //     })

    //     return registrationInputs;
    // }

    // const handleChange = (data: ICategoryForm | undefined) => {
    //     onChange({[index]: {...form, ...data}});
    // }

    const handleImage = (file: File) => {
        // setFiles([...files, file]);
        // files.push(file);
    }

    const deleteImage = (name: string) => {
        // const filtered = files.filter( file => {
        //     return file.name !== name;
        // });
        // setFiles(filtered);
    }

    // const setImages = (images: string[]) => {
    //     let elems = [];
    //     if(edit) {
    //         for(let index = 0; index< 4; index++) {
    //                 const url = images[index] ? `${process.env.REACT_APP_API_URL}/Category/getImage/${form.id}/${images[index]}` : '';
    //                 elems.push(<InputImages key={index} url={url} getFile={handleImage} deleteFile={deleteImage} />)
    //         }
    //         return elems;
    //     } else {
    //         for(let index = 0; index< 4; index++) {
    //             elems.push(<InputImages key={index} url={''} getFile={handleImage} deleteFile={deleteImage} />)
    //         }
    //         return elems;
    //     }
    // }

    // const setPreviewImage = (image: File) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         handleChange({...form, ...{image: reader.result as string}});
    //     };
    //     reader.readAsDataURL(image);
    // }

    // const getImage = (src: string) => {
    //     return <CategoryImage src={src} alt="image" />
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
        <Form id="CategoryForm" onChange={ (event: any) => {
            event.preventDefault();
            // handleChange(getCategoryForm(event.target.form));
        }} >
            <Button>x</Button>
            <FormHeader>
                <CategoryImageInput>
                    <InputImages key={1} url={""} getFile={handleImage} deleteFile={deleteImage} />
                </CategoryImageInput>
                <CategoryInputs>
                    <Input name="name" type="text" placeholder="name" defaultValue={form.name} />
                </CategoryInputs>
            </FormHeader>
            <FormFooter>
                <Textarea 
                    name="description_en" 
                    className="input description"
                    placeholder="description.en"
                    defaultValue={form.description}
                ></Textarea>
                <Textarea 
                    name="description_es" 
                    className="input description" 
                    placeholder="description.es"
                    defaultValue={form.description}
                ></Textarea>
                <Textarea 
                    name="description_ru" 
                    className="input description" 
                    placeholder="description.ru"
                    defaultValue={form.description}
                ></Textarea>
            </FormFooter>
        </Form>
    )
}

export default CategoryForm;
