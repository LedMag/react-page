export const deleteProducts = async (id: number) => {
    const token = document.cookie.split('=')[2];
    const res = await fetch(`${process.env.REACT_APP_API_URL}/product/delete/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });
    return await res.json();
}