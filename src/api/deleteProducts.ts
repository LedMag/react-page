export const deleteProducts = async (id: number) => {
    const token = document.cookie.split('=')[1];
    const res = await fetch(`${process.env.REACT_APP_API_URL}/products/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    return await res.json();
}

export const deleteProductsFromTrash = async (id: number) => {
    const token = document.cookie.split('=')[1];
    const res = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    return await res.json();
}