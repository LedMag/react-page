import { uploadFile } from "./uploadFile";

export const postCategory = async (category: any) => {
    const token = document.cookie.split('=')[1];
    const url = `${process.env.REACT_APP_API_URL}/categories/`;

    const data = JSON.stringify(category);

    await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": `Bearer ${token}`,
        },
        body: data
    })
    .then( res => res.json())
    .then( async newCategory => {
        if(!category.files) return;
        for await (const file of category.files) {
            const imageName = newCategory.data.id + file.name;
            uploadFile(file, newCategory.data.id, imageName);
        }
    })
}


