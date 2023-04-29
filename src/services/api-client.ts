import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '09dec87b9b9b44f69985f34b6bf09121'
    }
});