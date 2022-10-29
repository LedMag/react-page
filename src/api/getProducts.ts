export const getAllProducts = async () => {
    const res = await fetch('http://127.0.0.1/api/products');
    return await res.json();
}

export const getProductsByFilter = async (data: any) => {
    
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
    };

    const res = await fetch('http://127.0.0.1/api/products/sort', options);
    return await res.json();
}