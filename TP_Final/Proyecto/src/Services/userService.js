import axiosClient from './axiosClient.js';
const apiClient = axiosClient.getApiClient();


  export const userService = {
    login(user) {
      return apiClient.post('/login', user);
    },
    register(user) {
      return apiClient.post('/register', user);
    }
  }