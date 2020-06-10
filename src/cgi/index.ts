import axios from 'axios';
import { store } from '../store';
import { DEFAULT_URL, LOGIN_URL, REGISTER_URL, ITEM_URL, COMMODITY_LIST, SEND_CODE_URL, PROFILE_URL, MODITY_PROFILE_URL, UPLOAD_IMAGE } from './cgi';
import { LoginConfig, RegisterConfig, SendCodeConfig } from './types';

axios.defaults.baseURL = DEFAULT_URL;

export async function login(config: LoginConfig) {
    return axios.post(LOGIN_URL, config);
}

export async function register(config: RegisterConfig) {
    return axios.post(REGISTER_URL, config);
}

export async function getUserProfile() {
    if (store.isLogin) {
        return axios.get(PROFILE_URL, {
            headers: {
                Authorization: store.loginAuthorization
            }
        });
    }
}

export async function modifyUserProfile(config: any) {
    if (store.isLogin) {
        return axios.put(MODITY_PROFILE_URL, config, {
            headers: {
                Authorization: store.loginAuthorization
            }
        });
    }
}

export async function sendEmailCode(config: SendCodeConfig) {
    return axios.post(SEND_CODE_URL, {
        email: config.email
    });
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