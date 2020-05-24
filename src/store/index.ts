import Store from './store';
export interface commodity {
    tag: Array<string>;
    name: string;
    price: number;
}

export const store: Store = new Store();