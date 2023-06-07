import InputImages from "components/InputFiles/Images/InputImages";
import React from "react";
import { Button,
    CollectionImageInput,
    CollectionInputs,
    Form,
    FormFooter,
    FormHeader,
    Input,
    Textarea 
} from "./CollectionFormStyle";

interface ICollectionForm {
    // id?: number,
    name: string,
    // price: string,
    // image: string,
    // imgs: string[],
    // category: string,
    // collection: string,
    description_en: string,
    description_es: string,
    description_ru: string,
    // description: string,
    // img: string
}

interface ICollectionFormElement {
    form: ICollectionForm,
    handlerChange: any,
	saveCollection: any
}

const CollectionForm = ( 
    { form, handlerChange, saveCollection }: ICollectionFormElement
    ): JSX.Element => {
    const handleImage = ()=>{};
    const deleteImage = ()=>{};

    const getCollectionForm = (form:any): ICollectionForm | undefined => {
        if(!form) return;
        
        const registrationInputs: any = {};
        const formData = new FormData(form);
        const keys = Array.from(formData.keys());
        keys.forEach( key => {
            if(key === 'image') return;
            registrationInputs[key] = formData.get(key);
        })

        return registrationInputs;
    }

    console.log(form)

    return (
        <Form id="CollectionForm" onChange={ (event: any) => {
            event.preventDefault();
            handlerChange(getCollectionForm(event.target.form));
        }} >
            {/* <Button>x</Button> */}
            <FormHeader>
                <CollectionImageInput>
                    <InputImages key={1} edit={false} url={""} getFile={handleImage} deleteFile={deleteImage} />
                </CollectionImageInput>
                <CollectionInputs>
                    <Input name="name" type="text" placeholder="name" defaultValue={form.name} />
                </CollectionInputs>
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
            <Button onClick={saveCollection}>Save</Button>
        </Form>
    )
}

export default CollectionForm;