import request from 'superagent';
const URL = 'http://localhost:3000';

export async function signUpUser(email,password){
    const response = await request
    .post(`${URL}/auth/signup`)
    .send({email, password})
    
    return response.body;
}
export async function loginUser(email,password){
    const response = await request
    .post(`${URL}/auth/signin`)
    .send({email, password})
    
    return response.body;
}
export async function getData(token, query){
    const response = await request
    .get(`${URL}/api/movies`)
    .query({search: query})
    .set('Authorization', token)
    
    return response.body
}
export async function createFavorite(favItem, token){
    const response = await request
    .post(`${URL}/api/favorites`)
    .set('Authorization', token)
    .send(favItem)

    return response.body;
}
export async function fetchFavorites(token){
    const response = await request
    .get(`${URL}/api/favorites`)
    .set('Authorization', token)

    return response.body
}