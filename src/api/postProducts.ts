import { IProduct } from '../pages/admin/CreateProducts/CreateProducts'
import { uploadFile } from './uploadFile';

export const postProducts = async (products: IProduct[]) => {
    const token = document.cookie.split('=')[1];
    const url = `${process.env.REACT_APP_API_URL}/product/`;

    for await (const product of products) {          
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
        .then( async data => {
            if(!product.files) return;
            for await (const file of product.files) {
                const res = uploadFile(file, data.id, data.id + file.name);
                console.log(res);
            }
        })
    }

}


