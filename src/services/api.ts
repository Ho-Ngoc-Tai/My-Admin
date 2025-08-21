import axios from 'axios';

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = () => API.get<User[]>('/users');
export const getUserById = (id: string | string[]) => API.get<User>(`/users/${id}`);
