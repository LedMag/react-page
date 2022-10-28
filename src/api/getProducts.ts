export const getAllProducts = async () => {
    const res = await fetch('http://127.0.0.1/api/products');
    return await res.json();
}