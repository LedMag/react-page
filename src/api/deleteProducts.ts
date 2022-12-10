export const deleteProducts = async (id: number) => {
    const res = await fetch('http://127.0.0.1/api/admin/products/' + id, {
        method: 'DELETE',
    });
    return await res.json();
}