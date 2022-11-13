export const postProducts = async (data: any) => {
    const array = Object.values(data);

    const res = await fetch('http://127.0.0.1/api/admin/products/create', {
        method: 'POST',
        headers: [
            ['Content-Type', 'aplication/json'],
            ['Accept', 'aplication/json']
        ],
        body: JSON.stringify(array)
    });
    return await res.json();
}