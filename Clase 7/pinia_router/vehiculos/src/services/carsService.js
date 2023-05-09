// EXPRESS  ->   ESCUCHANDO EN PUERTO 8080   
// EXPONE UNA API PARA ESCUCHAR

//  AXIOS CONSULTA A EXPRESS
//

import axios from 'axios'

// https://jsonplaceholder.typicode.com/posts

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getCars() {
        return apiClient.get('/api/cars');
    },
    setCar(paciente) {
        return apiClient.post('/api/setpaciente', paciente);
    },
    deletePaciente(codigo) {
        return apiClient.delete('/api/paciente/' + codigo);
    },
    modificarPaciente(paciente) {
        // chequear
        return apiClient.put('/api/setpaciente', paciente)
    }
}