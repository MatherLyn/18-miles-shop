import axios from 'axios';
import { store } from '../store';

export async function getUserInfo () {
    return axios.get('/profile').then(res => {
        const data = res.data
        if (data) {
            
        }
    })
}