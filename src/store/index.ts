import Store from './store';

export interface TopCommodity {
    tag: Array<string>;
    name: string;
    price: number;
}
// export interface SortCommodity {
//     img: string;
//     name: string;
// }
export interface AddressInfo {
    id?: number;
    default: boolean;
    province: string;
    city: string;
    county: string;
    postal_code: string;
    address: string;
    recipient: string;
    phone: string;
}

export interface Good {
    id: number;
    sku: ConcretCommodity;
    sku_pic: string;
    name: string;
    attr_name: string;
    price: number;
    num: number;
    stock: number;
    isChecked: boolean;
}

export interface UserInfo {
    id: number;
    avatar: string;
    username: string;
    email: string;
    birthday: string;
    sex: number;
    phone: string;
    identify: number;
}

export interface CommodityAttributes {
    id: number;
    name: string;
    values: Array<CommodityAttributeValue>;
}

export interface CommodityAttributeValue {
    id: number;
    name: string;
}

export interface Comment {
    star: number;
    comment: string,
    username: string,
    avatar: string,
}

export interface Commodity {
    spu_id: number;
    name: string;
    price: number;
    spu_pic: string;
    category: string;
}

export interface ConcretCommodity {
    id: number;
    sku_id: number;
    name: string;
    sku_pic: string;
    des_pic?: string;
    price: string;
    stock: number;
    sales: number;
    attrs: Array<any>;
    v: Array<any>;
}

export interface ItemDetail {
    spu_id: number;
    name: string;
    spu_pic: string;
    category: Category;
    // sku_pic: string;
    attrs: Array<CommodityAttributes>;
    skus: Array<ConcretCommodity>;
}

export interface OrderDetail {
    spu_id: number;
    id: number;
    name: string;
    price: number;
    sku_img: string;
    attrs: Array<string>;
    v: Array<string>;
    num: number;
    status: number;
}

export interface Category {
    id: number;
    name: string;
    father_id: number;
}

export const store: Store = new Store();

// @ts-ignore
window.s = store;