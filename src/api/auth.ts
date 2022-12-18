export const login = async (data: {email: string, password: string}) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
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
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
    return await res.json();
}

export const register = async (data: any) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}
