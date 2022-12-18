export const getAllProducts = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/products`);
    return await res.json();
}

export const getProductsByFilter = async (data: any) => {
    
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
    };

    const res = await fetch(`${process.env.REACT_APP_API_URL}/products/sort`, options);
    return await res.json();
}