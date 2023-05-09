import axiosClient from './axiosClient.js';
const apiClient = axiosClient.getApiClient();

export default {
    login(user) {
        //Utilizo api Client que es el objeto inicializado de axios
        return apiClient.post('/api/login', usuario);
    },
    register(user){
        return apiClient.post('/api/register', usuario);
    }
}