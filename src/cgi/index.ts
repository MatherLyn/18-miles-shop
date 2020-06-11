import axios from 'axios';
import { store } from '../store';
import { DEFAULT_URL, LOGIN_URL, REGISTER_URL, COMMODITY_DETAIL_URL, COMMODITY_LIST, SEND_CODE_URL, PROFILE_URL, MODITY_PROFILE_URL, COMMENT_URL, RELEASE_COMMENT_URL, CART_URL, MODIFY_ADDRESS_URL, ADD_ADDRESS_URL, GET_ORDER_URL, ADD_ORDER_URL, CONFIRM_ORDER_URL, ADD_ORDER_FROM_CART_URL, GET_ADDRESS_URL, DELETE_ADDRESS_URL } from './cgi';
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

export async function getCommodityList(param: any) {
    let queryString: string = '?';
    const keys = Reflect.ownKeys(param) as Array<string>;
    for (let i: number = 0; i < keys.length; i++) {
        queryString += `${keys[i]}=${param[keys[i]]}&`
    }
    queryString = queryString.substring(0, queryString.length - 1);
    return axios.get(`${COMMODITY_LIST}${queryString}`);
}

export async function getCommodityDetail(spuId: number) {
    return axios.get(`${COMMODITY_DETAIL_URL}/${spuId}`, {});
}

export async function getComments(spuId: number) {
    return axios.get(COMMENT_URL.replace('[spuId]', spuId.toString()), {});
}

export async function releaseComment(spuId: number, payload: any) {
    return axios.post(RELEASE_COMMENT_URL.replace('[spuId]', spuId.toString()), payload, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}

export async function getCartList() {
    return axios.get(CART_URL, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}

export async function saveToCart(payload: any) {
    return axios.post(CART_URL, payload, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}

export async function getAddressList() {
    return axios.get(GET_ADDRESS_URL, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}

export async function modifyAddress(payload: any) {
    // payload.id是address_id
    return axios.put(`${MODIFY_ADDRESS_URL}/${payload.id}`, payload, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}

export async function addAddress(payload: any) {
    return axios.post(ADD_ADDRESS_URL, payload, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}

export async function deleteAddress(id: any) {
    // payload.id是address_id
    return axios.delete(`${DELETE_ADDRESS_URL}/${id}`, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}

export async function getOrderList() {
    return axios.get(GET_ORDER_URL, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}

export async function addOrder(payload: any) {
    return axios.post(ADD_ORDER_URL, payload, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}

export async function addOrderFromCart(payload: any) {
    return axios.post(ADD_ORDER_FROM_CART_URL, payload, {
        headers: {
            Authorization: store.loginAuthorization
        }
    })
}

export async function confirmOrder(orderId: any) {
    return axios.put(CONFIRM_ORDER_URL.replace('[orderId]', orderId), {}, {
        headers: {
            Authorization: store.loginAuthorization
        }
    });
}