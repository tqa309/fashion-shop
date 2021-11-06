import axios from 'axios';

const url = 'https://server.digiviet.xyz/api/auth/';

export const login = (data) => axios.post(url + 'login', data);
export const logout = (token) => axios.post(url + 'logout', token);
export const register = (data) => axios.post(url + 'preRegister', data);
export const activateAccount = (data) => axios.post(url + 'register', data);
export const forgotPassword = (email) => axios.post(url + 'forgotPassword', email);
export const resetPassword = (data) => axios.post(url + 'resetPassword', data);
