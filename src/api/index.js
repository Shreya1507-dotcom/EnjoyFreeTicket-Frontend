import axiosClient from "./axios";

const User = '/users/';
const Donation = '/donation/'
export const UserLogin = async (params) => await axiosClient.post(User + 'login', params);
export const UserRegister = async (params) => await axiosClient.post(User + 'register', params);
export const UserDonation = async (params) => await axiosClient.post(Donation + 'create-order', params);


