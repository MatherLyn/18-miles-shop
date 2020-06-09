import axios from 'axios';
import { store } from '../store';
import { DEFAULT_URL, LOGIN_URL, REGISTER_URL, ITEM_URL, COMMODITY_LIST } from './cgi';
import { LoginConfig, RegisterConfig } from './types';

axios.defaults.baseURL = DEFAULT_URL;

export async function login(config: LoginConfig) {
    return axios.post(LOGIN_URL, {}, {
        params: config
    })
}

export async function register(config: RegisterConfig) {
    return axios.post(REGISTER_URL, {}, {
        params: config
    })
}

export async function item(number: number) {
    return axios.get(`${ITEM_URL}${number}`, {});
}

export async function getCommodityList(param: any) {
    let queryString: string = '?';
    const keys = Reflect.ownKeys(param) as Array<string>;
    for (let i: number = 0; i < keys.length; i++) {
        queryString += `${keys[i]}=${param[keys[i]]}&`
    }
    queryString = queryString.substring(0, queryString.length - 1);
    return axios.get(`${COMMODITY_LIST}${queryString}`);
}