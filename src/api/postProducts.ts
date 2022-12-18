export const postProducts = async (data: any) => {
    const array = Object.values(data);

    const res = await fetch(`${process.env.REACT_APP_API_URL}/admin/products/create`, {
        method: 'POST',
        headers: [
            ['Content-Type', 'aplication/json'],
            ['Accept', 'aplication/json']
        ],
        body: JSON.stringify(array)
    });
    return await res.json();
}