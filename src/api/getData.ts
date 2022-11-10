export const getAllCategories = async () => {
    const res = await fetch('http://127.0.0.1/api/categories');
    return await res.json();
}

export const getAllCollections = async () => {
    const res = await fetch('http://127.0.0.1/api/collections');
    return await res.json();
}