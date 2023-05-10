import React from "react";
import InputImages from "components/InputFiles/Images/InputImages";
import { 
    Button,
    CategoryImageInput,
    CategoryInputs,
    Form,
    FormFooter,
    FormHeader,
    Input,
    Textarea 
} from "./CollectionFormStyle";



const CollectionForm = () => {
    const handleImage = ()=>{};
    const deleteImage = ()=>{};

    return (
        <Form id="CategoryForm" onChange={ (event: any) => {
            event.preventDefault();
            // handleChange(getCategoryForm(event.target.form));
        }} >
            <Button>x</Button>
            <FormHeader>
                <CategoryImageInput>
                    <InputImages key={1} edit={false} url={""} getFile={handleImage} deleteFile={deleteImage} />
                </CategoryImageInput>
                <CategoryInputs>
                    <Input name="name" type="text" placeholder="name" defaultValue={"form.name"} />
                </CategoryInputs>
            </FormHeader>
            <FormFooter>
                <Textarea 
                    name="description_en" 
                    className="input description"
                    placeholder="description.en"
                    defaultValue={"form.description"}
                ></Textarea>
                <Textarea 
                    name="description_es" 
                    className="input description" 
                    placeholder="description.es"
                    defaultValue={"form.description"}
                ></Textarea>
                <Textarea 
                    name="description_ru" 
                    className="input description" 
                    placeholder="description.ru"
                    defaultValue={"form.description"}
                ></Textarea>
            </FormFooter>
        </Form>
    )
}

export default CollectionForm;