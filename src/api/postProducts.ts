import { IProduct } from '../pages/admin/CreateProducts/CreateProducts'
import { uploadFile } from './uploadFile';

export const postProducts = async (products: IProduct[]) => {
    const token = document.cookie.split('=')[1];
    const url = `${process.env.REACT_APP_API_URL}/products/`;

    for await (const product of products) {   
        product.form.category = +product.form.category;
        product.form.collection = +product.form.collection;
        product.form.price = +product.form.price;

        const data = JSON.stringify(product.form);

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
        .then( async newProduct => {
            if(!product.files) return;
            for await (const file of product.files) {
                const imageName = newProduct.data.id + file.name;
                uploadFile(file, newProduct.data.id, imageName);
            }
        })
    }

}


