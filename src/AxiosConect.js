import axios from 'axios';

//const BASE_URL = 'https://animalariumshop.herokuapp.com/'; conexion en despliegue
//const BASE_URL = 'http://localhost:3000';

const BASE_URL = 'https://animalarium-back-production.up.railway.app/';

const apiInstance = axios.create({baseURL:BASE_URL});

export default apiInstance;



export const AxiosTest = () =>{

    console.log(apiInstance);

}