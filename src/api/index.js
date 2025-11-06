import axiosClient from "./axios";

const User = '/users/';


// Studio API's
export const UserLogin = async (params) => await axiosClient.post(User + 'login', params);
export const UserRegister = async (params) => await axiosClient.post(User + 'register', params);

