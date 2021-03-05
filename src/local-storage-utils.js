export function getToken(){
    const token = localStorage.getItem('TOKEN');
    if(token) return JSON.parse(token);
    return '';
}

export function removeToken(){
    return localStorage.setItem('TOKEN', '')
}