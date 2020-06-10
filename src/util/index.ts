import { getCommodityList } from '../api/index';
import { store, Commodity } from '../store';

export function getRoute () {
    const url: string = window.location.href;
    // TODO 隐患
    // localhost:3000
    // localhost:3000/sort
    // localhost:3000/sort/abc
    // localhost:3000/sort?abc=1
    const reg: RegExp = /\/\w+(?=(\/|\?|\#|$))/;
    const res: RegExpExecArray | null = reg.exec(url);
    if (res !== null) {
        return res[0].slice(1, res[0].length);
    }
    return 'home';
}

export function addAnchor (pathname: string, param: any) {
    const keys = Reflect.ownKeys(param) as Array<string>;
    pathname = pathname.includes('#') ? pathname : `${pathname}#`;
    for (let i: number = 0; i < keys.length; i++) {
        const query: string = `${keys[i]}=${encodeURIComponent(param[keys[i]])}&`;
        pathname += query;
    }
    pathname = pathname.substring(0, pathname.length - 1);
    return pathname;
}

export function collectAnchor (pathname: string) {
    const result: Map<string, string> = new Map();
    const anchorIndex: number = pathname.indexOf('#');
    if (anchorIndex !== -1) {
        for (let i: number = anchorIndex + 1; i < pathname.length; i++) {
            let key: string = '';
            let value: string = '';
            let j: number = i;
            while (pathname[j] !== '=') {
                key += pathname[j++];
            }
            j++;
            while(j < pathname.length && pathname[j] !== '&') {
                value += pathname[j++];
            }
            i = j;
            result.set(key, decodeURIComponent(value));
        }
    }
    return result;
}

export async function doSearch (param: any) {
    // const res = await getCommodityList(param);
    // const list = res.data as Array<Commodity>;
    // store.searchResult.concat(list);
    const length: number = store.recentSearch.length;
    for (let i: number = 0; i < store.recentSearch.length; i++) {
        if (store.recentSearch[i] === param.keyword) {
            store.recentSearch.splice(i, 1);
            break;
        }
    }
    if (length > 15) {
        store.recentSearch.pop();
    }
    store.recentSearch.unshift(param.keyword);
    window.localStorage.setItem('recentSearch', JSON.stringify(store.recentSearch));
}