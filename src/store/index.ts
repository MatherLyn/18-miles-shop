import Store from './store';
export interface topCommodity {
    tag: Array<string>;
    name: string;
    price: number;
}
export interface sortCommodity{
    img: string;
    name: string;
}

export const store: Store = new Store();