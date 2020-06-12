import { TopCommodity, Category, Good, AddressInfo, UserInfo, OrderDetail, Commodity, ItemDetail, ConcretCommodity } from './index';
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';
import { getUserProfile } from '../cgi';
import avatar from '../assets/avatar.png';


class Store {
    /**
     * 以下这些都是mock的数据，从后台返回
     */
    // 首页的热卖
    @observable public topCommodities: Array<Commodity> = [];
    // 首页的推荐
    @observable public recommendCommodities: Array<Commodity> = [];
    // 分类页的分类
    @observable public tabs: Array<Category> = [
        {
            id: 1,
            name: '美妆',
            father_id: 0,
        },
        {
            id: 2,
            name: '衣物',
            father_id: 0,
        },
        {
            id: 3,
            name: '数码',
            father_id: 0,
        },
        {
            id: 4,
            name: '母婴',
            father_id: 0,
        },
        {
            id: 5,
            name: '电器',
            father_id: 0,
        },
        {
            id: 6,
            name: '家具',
            father_id: 0,
        },
        {
            id: 7,
            name: '学生',
            father_id: 0,
        },
        {
            id: 8,
            name: '饮品',
            father_id: 0,
        },
        {
            id: 9,
            name: '服装',
            father_id: 0,
        },
    ];
    // 分类页的右边的商品展示
    @observable public sortCommodities: Array<Commodity> = [];
    // 用户信息
    @observable public userInfo: any = null;
    // 购物车内容
    @observable public cart: Array<Good> = [];
    // 商品详情缓存
    @observable public detailCache: ItemDetail | null = null;
    // 收货地址
    @observable public addresses: Array<AddressInfo> = [];
    @observable public defaultAddress: number = 0;
    // 订单内容
    @observable public order: Array<OrderDetail> = [];
    // 最近搜索
    @observable public recentSearch: Array<string> = [];
    // 搜索结果
    @observable public searchResult: Array<Commodity> = [];

    @observable public isLogin: boolean = false;

    @observable public buySku: ConcretCommodity | null = null;

    public loginAuthorization: string = '';

    constructor() {
        const r: string | null = window.localStorage.getItem('recentSearch');
        if (typeof r === 'string') {
            this.recentSearch = JSON.parse(r);
        }
        const a: string | null = window.localStorage.getItem('Authorization');
        if (typeof a === 'string') {
            this.isLogin = true;
            this.loginAuthorization = a;
        }
    }

    public setUserProfile = async () => {
        const res = await getUserProfile();
        this.userInfo = res?.data;
    }

    @computed get totalPrice() {
        let result: number = 0;
        for (let i: number = 0; i < this.cart.length; i++) {
            if (this.cart[i].isChecked) {
                result += this.cart[i].price * this.cart[i].num;
            }
        }
        return result;
    };
}

export default Store;