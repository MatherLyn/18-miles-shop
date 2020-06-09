import Store from './store';

export interface TopCommodity {
    tag: Array<string>;
    name: string;
    price: number;
}
export interface SortCommodity {
    img: string;
    name: string;
}
export interface AddressInfo {
    default: boolean,
    province: string,
    city: string,
    county: string,
    postal_code: string,
    address: string,
    recipient: string,
    phone: string,
}

export interface Category {
    iconUrl: string;
    name: string;
}

export interface Good {
    sku_pic: string,
    name: string,
    attr_name: string,
    price: number,
    num: number,
    stock: number,
    isChecked: boolean,
}

export interface UserInfo {
    id: number;
    avatar: string;
    username: string;
    email: string;
    birthday: string;
    sex: number;
    phone: number;
    identify: number;
}

export interface CommodityAttributes {
    id: number;
    name: string;
    stock: number;
}

export interface CommodityComments {
    star: number;
    comment: string,
    username:string,
    avatar:string,
}

export interface Commodity {
    spu_id: number;
    name: string;
    price: number;
    spu_pic: string;
    category: string;
}

export interface CommodityDetail {
    spu_id: number;
    name: string;
    price: number;
    sku_pic: string;
    des_pic: string;
    attrs: Array<CommodityAttributes>;
    comments: Array<CommodityComments>;
}

export interface OrderDetail {
    spu_id: number;
    id: number;
    name: string;
    price: number;
    sku_img: string;
    attrs:Array<string>;
    v:Array<string>;
    num: number;
    status: number;
}

export const store: Store = new Store();