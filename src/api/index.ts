import axios from 'axios';
import { store } from '../store';
import { DEFAULT_URL, LOGIN_URL, REGISTER_URL } from './cgi';
import { LoginConfig, RegisterConfig } from './types';

axios.defaults.baseURL = DEFAULT_URL;

export async function login (config: LoginConfig) {
    return axios.post(LOGIN_URL, {}, {
        params: config
    })
}

export async function register (config: RegisterConfig) {
    return axios.post(REGISTER_URL, {}, {
        params: config
    })
}