import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-ec646.firebaseio.com/'
});

export default instance;