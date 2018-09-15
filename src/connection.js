import axios from 'axios';

import ApSettings from './AppSettings.json'

const AppSttings = ApSettings
const connection = axios.create({
    baseURL:AppSttings.web.baseurl
});

connection.defaults.headers.common['Authorization']="AUTH TOKEN"

connection.interceptors.request.use(request=>{
    return request;
},error =>{
    return Promise.reject(error);
});


connection.interceptors.response.use(response=>{
    return response;
},error =>{
    return Promise.reject(error);
});

export default connection;