export const getAllCategories = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/categories`);
    return await res.json();
}

export const getAllCollections = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/collections`);
    return await res.json();
}