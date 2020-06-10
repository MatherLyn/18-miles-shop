import { getCommodityList } from '../cgi/index';
import { store, Commodity } from '../store';

export function getRoute () {
    const url: string = window.location.href;
    // TODO 隐患
    // localhost:3000
    // localhost:3000/sort
    // localhost:3000/sort/abc
    // localhost:3000/sort?abc=1
    // const reg: RegExp = /\//g;
    // const res: RegExpExecArray | null = reg.exec(url);
    // if (res !== null) {
    //     return res[res.length - 1].slice(1, res[res.length - 1].length) || 'home';
    // }

    const index: number = url.lastIndexOf('/');
    let res: string = '';
    for (let i: number = index + 1; i < url.length; i++) {
        if (/\?|#/.test(url[i])) {
            break;
        }
        res += url[i];
    }
    return res || 'home';
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

export async function doSearch (param: any, arrInStore?: string) {
    const res = await getCommodityList(param);
    const list = res.data as Array<Commodity>;
    if (arrInStore) {
        // @ts-ignore
        store[arrInStore] = list;
    } else {
        store.searchResult.concat(list);
    }
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
    const keyword = param.keyword ? store.recentSearch.unshift(param.keyword) : null;
    window.localStorage.setItem('recentSearch', JSON.stringify(store.recentSearch));
}

export function throttle (func: Function, time: number) {
    let timer: NodeJS.Timeout | null = null;
    return function (...args: Array<any>) {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(null, args);
                clearTimeout(timer as NodeJS.Timeout);
                timer = null;
            }, time);
        }
    }
}

export function debounce (func: Function, time: number) {
    let timer: NodeJS.Timeout | null = null;
    return function (...args: Array<any>) {
        if (timer) {
            clearTimeout(timer as NodeJS.Timeout);
            timer = null;
        }
        timer = setTimeout(() => {
            func.apply(null, args);
            clearTimeout(timer as NodeJS.Timeout);
            timer = null;
        }, time);
    }
}