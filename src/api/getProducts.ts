export const getAllProducts = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/product`);    
    return await res.json();
}

export const getProductsByFilter = async (data: any) => {
    const options = {
        method: 'POST',
        // mode: 'cors',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(`${process.env.REACT_APP_API_URL}/product/sort`, options);
    
    return await res.json();
}

export const getImage = async (id: string): Promise<Blob> => {
    const url: string = `${process.env.REACT_APP_API_URL}/product/getImage/${id}`;
    return await fetch(url)
    .then( d => d.blob())
    .catch( err => {
        console.log('Err: ',err);
        return err;
    })
}