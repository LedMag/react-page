export const login = async (data: {email: string, password: string}) => {
    return await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            "Content-Type": "application/json; charset=UTF-8",
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then( res => res.json())
    .then( cred => {
        console.log('Token', cred.access_token);
        
        document.cookie = `token=${cred.access_token}; max-age=${864000}; path=/; samesite=strict;`;
        console.log('Cookie', document.cookie);
        return {id: cred.id, email: cred.email, role: cred.role};
    })
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
