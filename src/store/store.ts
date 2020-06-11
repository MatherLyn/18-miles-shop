import { TopCommodity, Category, Good, AddressInfo, UserInfo, OrderDetail, Commodity, ItemDetail } from './index';
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';
import { getUserProfile } from '../cgi';
import avatar from '../assets/avatar.png';


class Store {
    /**
     * 以下这些都是mock的数据，从后台返回
     */
    // 首页的热卖
    @observable public topCommodities: Array<Commodity> = [
        {
            spu_id: 123,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 324,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 4235,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 524,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 2563,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 3524,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 5234,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 523,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        }
    ];
    // 首页的推荐
    @observable public recommendCommodities: Array<Commodity> = [
        {
            spu_id: 123,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 324,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 4235,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 524,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 2563,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 3524,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 5234,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 523,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        }
    ];
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
    @observable public sortCommodities: Array<Commodity> = [
        {
            spu_id: 123,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 324,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 4235,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 524,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 2563,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 3524,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 5234,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 523,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 123,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 324,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 4235,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 524,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 2563,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 3524,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 5234,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 523,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 123,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 324,
            name: 'string',
            price: 123,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },

    ];
    // 用户信息
    @observable public userInfo: UserInfo = {
        id: 123,
        avatar: avatar,
        username: 'string',
        email: 'string',
        birthday: 'string',
        sex: 0,
        phone: '13143351504',
        identify: 0
    };
    // 购物车内容
    @observable public cart: Array<Good> = [
        {
            "sku_pic": "http://kanolin.cn/market18/app/public/pic/pic.png",
            "name": "aaaaaaaaaaaaaaa",
            "attr_name": "bbbbbb",
            "price": 123,
            "num": 2,
            "stock": 100,
            "isChecked": false,
        },
        {
            "sku_pic": "http://kanolin.cn/market18/app/public/pic/pic.png",
            "name": "aaaaaaaaaaaaaaa",
            "attr_name": "bbbbbb",
            "price": 123,
            "num": 2,
            "stock": 100,
            "isChecked": false,
        },
    ];
    // 商品详情缓存
    @observable public detailCache: Array<ItemDetail> = [
        
    ];
    // 收货地址
    @observable public addresses: Array<AddressInfo> = [
        {
            default: true,
            province: '广东省',
            city: '广州市',
            county: '番禺区',
            postal_code: '510006',
            address: '华南理工大学(大学城校区)',
            recipient: '林浩2',
            phone: '12345678900',
        },
        {
            default: false,
            province: '广东省',
            city: '广州市',
            county: '番禺区',
            postal_code: '510006',
            address: '华南理工大学(大学城校区)',
            recipient: '林浩2',
            phone: '12345678900',
        },
        {
            default: false,
            province: '广东省',
            city: '广州市',
            county: '番禺区',
            postal_code: '510006',
            address: '华南理工大学(大学城校区)',
            recipient: '林浩2',
            phone: '12345678900',
        },
        {
            default: false,
            province: '广东省',
            city: '广州市',
            county: '番禺区',
            postal_code: '510006',
            address: '华南理工大学(大学城校区)',
            recipient: '林浩2',
            phone: '12345678900',
        },
        {
            default: false,
            province: '广东省',
            city: '广州市',
            county: '番禺区',
            postal_code: '510006',
            address: '华南理工大学(大学城校区)',
            recipient: '林浩2',
            phone: '12345678900',
        },
    ];
    // 订单内容
    @observable public order: Array<OrderDetail> = [
        {
            spu_id: 1,
            id: 1,
            name: '一只鞋',
            price: 555,
            sku_img: 'string',
            num: 13,
            status: 0,
            attrs: ['尺寸', '颜色'],
            v: ['37码', '白色']
        },
        {
            spu_id: 1,
            id: 12,
            name: 'string',
            sku_img: 'string',
            price: 1234,
            num: 3,
            status: 2,
            attrs: ['尺寸', '颜色'],
            v: ['37码', '白色']
        },
        {
            spu_id: 1,
            id: 33,
            name: 'string',
            sku_img: 'string',
            price: 4312,
            num: 123,
            status: 1,
            attrs: ['尺寸', '颜色'],
            v: ['37码', '白色']
        },
        {
            spu_id: 1,
            id: 123,
            name: 'string',
            sku_img: 'string',
            price: 4562,
            num: 3,
            status: 3,
            attrs: ['尺寸', '颜色'],
            v: ['37码', '白色']
        },
        {
            spu_id: 1,
            id: 44,
            name: 'string',
            sku_img: 'string',
            price: 2345,
            num: 12,
            status: 2,
            attrs: ['尺寸', '颜色'],
            v: ['37码', '白色']
        },
        {
            spu_id: 1,
            id: 11,
            name: 'string',
            sku_img: 'string',
            price: 767,
            num: 1,
            status: 0,
            attrs: ['尺寸', '颜色'],
            v: ['37码', '白色']
        },
    ];
    // 最近搜索
    @observable public recentSearch: Array<string> = [];
    // 搜索结果
    @observable public searchResult: Array<Commodity> = [
        {
            spu_id: 123,
            name: 'string',
            price: 34,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 23,
            name: 'string',
            price: 34,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 132,
            name: 'string',
            price: 34,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
        {
            spu_id: 312,
            name: 'string',
            price: 34,
            spu_pic: 'http://kanolin.cn/market18/app/public/pic/pic.png',
            category: 'string',
        },
    ];

    @observable public isLogin: boolean = false;

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