import Store from './store';

export interface TopCommodity {
    tag: Array<string>;
    name: string;
    price: number;
}
export interface SortCommodity{
    img: string;
    name: string;
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
    comment: string
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

export const store: Store = new Store();