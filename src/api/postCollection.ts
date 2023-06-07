import { uploadFile } from "./uploadFile";

export const postCollection = async (collection: any) => {
    const token = document.cookie.split('=')[1];
    const url = `${process.env.REACT_APP_API_URL}/collections/`;

    const data = JSON.stringify(collection);

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
    .then( async newCollection => {
        if(!collection.files) return;
        for await (const file of collection.files) {
            const imageName = newCollection.data.id + file.name;
            uploadFile(file, newCollection.data.id, imageName);
        }
    })
}


