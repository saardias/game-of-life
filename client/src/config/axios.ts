import axios from 'axios';
import env from './config';

let headers = {
    client: 'web',
    clientVersion: env.APP_VERSION,
};

axios.defaults.withCredentials = false

const instance = axios.create({
    baseURL: env.apiGateway.API_SERVER_URL,
    headers: headers,
});
instance.defaults.withCredentials = false


export default instance;