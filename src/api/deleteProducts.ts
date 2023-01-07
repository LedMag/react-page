export const deleteProducts = async (id: number) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/product/delete/${id}`, {
        method: 'GET',
    });
    return await res.json();
}