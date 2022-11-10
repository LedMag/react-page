export const login = async (data: {email: string, password: string}) => {
    const res = await fetch('http://127.0.0.1:80/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

export const logout = async (token: string) => {
    const res = await fetch('http://127.0.0.1:80/api/auth/logout', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    return await res.json();
}

export const register = async (data: any) => {
    const res = await fetch('http://127.0.0.1:80/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}