import { TopCommodity, Category, Good, SortCommodity, AddressInfo, UserInfo, CommodityDetail, OrderDetail, Commodity } from './index';
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';


class Store {
    /**
     * 以下这些都是mock的数据，从后台返回
     */
    // 首页的八个分类
    @observable public categories: Array<Category> = [
        {
            iconUrl: require('../components/Categories/image/1.png'),
            name: '美妆'
        },
        {
            iconUrl: require('../components/Categories/image/2.png'),
            name: '衣物'
        },
        {
            iconUrl: require('../components/Categories/image/3.png'),
            name: '数码'
        },
        {
            iconUrl: require('../components/Categories/image/4.png'),
            name: '母婴'
        },
        {
            iconUrl: require('../components/Categories/image/5.png'),
            name: '电器'
        },
        {
            iconUrl: require('../components/Categories/image/6.png'),
            name: '家具'
        },
        {
            iconUrl: require('../components/Categories/image/7.png'),
            name: '学生'
        },
        {
            iconUrl: require('../components/Categories/image/8.png'),
            name: '饮品'
        },
    ];
    // 首页的热卖
    @observable public topCommodities: Array<Commodity> = [
        {
            spu_id: 123,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 324,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 4235,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 524,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 2563,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 3524,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 5234,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 523,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        }
    ];
    // 首页的推荐
    @observable public recommendCommodities: Array<Commodity> = [
        {
            spu_id: 123,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 324,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 4235,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 524,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 2563,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 3524,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 5234,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 523,
            name: 'string',
            price: 123,
            spu_pic: 'string',
            category: 'string',
        }
    ];
    // 分类页的分类
    @observable public tabs: Array<string> = [
        '新品推荐',
        '产品1',
        '产品2',
        '产品3',
        '产品4',
        '产品5',
        '产品6',
        '产品7',
        '产品8',
        '产品9',
        '产品10',
        '产品11',
        '产品12',
        '产品9',
        '产品10',
        '产品11',
        '产品12',
    ];
    // 分类页的右边
    @observable public sortCommodities: Array<SortCommodity> = [
        {
            'img': '',
            'name': '新品推荐1'
        },
        {
            'img': '',
            'name': '新品推荐2'
        },
        {
            'img': '',
            'name': '新品推荐3'
        },
        {
            'img': '',
            'name': '新品推荐4'
        },
        {
            'img': '',
            'name': '新品推荐5'
        },
        {
            'img': '',
            'name': '新品推荐6'
        },
        {
            'img': '',
            'name': '新品推荐7'
        },
        {
            'img': '',
            'name': '新品推荐8'
        },
        {
            'img': '',
            'name': '新品推荐9'
        },
        {
            'img': '',
            'name': '产品1'
        },
        {
            'img': '',
            'name': '产品1'
        },
        {
            'img': '',
            'name': '产品1'
        },
        {
            'img': '',
            'name': '产品1'
        },
        {
            'img': '',
            'name': '产品1'
        },
        {
            'img': '',
            'name': '产品1'
        },
        {
            'img': '',
            'name': '产品1'
        },
        {
            'img': '',
            'name': '产品1'
        },
        {
            'img': '',
            'name': '产品1'
        },
        {
            'img': '',
            'name': '产品2'
        },
        {
            'img': '',
            'name': '产品2'
        },
        {
            'img': '',
            'name': '产品2'
        },
        {
            'img': '',
            'name': '产品2'
        },
        {
            'img': '',
            'name': '产品2'
        },
        {
            'img': '',
            'name': '产品2'
        },
        {
            'img': '',
            'name': '产品2'
        },
        {
            'img': '',
            'name': '产品2'
        },
        {
            'img': '',
            'name': '产品2'

        },
    ];
    // 用户信息
    @observable public userInfo: UserInfo = {
        id: 123,
        avatar: 'string',
        username: 'string',
        email: 'string',
        birthday: 'string',
        sex: 0,
        phone: 13143351504,
        identify: 0
    };
    // 购物车内容
    @observable public cart: Array<Good> = [
        {
            "sku_pic": "",
            "name": "aaaaaaaaaaaaaaa",
            "attr_name": "bbbbbb",
            "price": 123,
            "num": 2,
            "stock": 100,
            "isChecked": false,
        },
        {
            "sku_pic": "",
            "name": "aaaaaaaaaaaaaaa",
            "attr_name": "bbbbbb",
            "price": 123,
            "num": 2,
            "stock": 100,
            "isChecked": false,
        },
    ];
    // 商品详情缓存
    @observable public detailCache: Array<CommodityDetail> = [
        {
            spu_id: 1,
            name: "小白鞋1",
            price: 999,
            sku_pic: "http://kanolin.cn:9090/img1.jpg",
            des_pic: "http://kanolin.cn:9090/img1-1.jpg",
            attrs: [
                {
                    id: 1,
                    name: "37码",
                    stock: 520
                },
                {
                    id: 2,
                    name: "38码",
                    stock: 521
                }
            ],
            comments: [
                {
                    star: 5,
                    comment: "好！物美价廉",
                    username: "林大妈",
                    avatar: "123",
                },
                {
                    star: 1,
                    comment: "垃圾鞋子，一个星都不想给，穿一星期就烂了",
                    username: "林大妈",
                    avatar: "123",
                }
            ]
        }
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
            spu_id: 0,
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
            spu_id: 0,
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
            spu_id: 0,
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
            spu_id: 0,
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
            spu_id: 0,
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
            spu_id: 0,
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
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 23,
            name: 'string',
            price: 34,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 132,
            name: 'string',
            price: 34,
            spu_pic: 'string',
            category: 'string',
        },
        {
            spu_id: 312,
            name: 'string',
            price: 34,
            spu_pic: 'string',
            category: 'string',
        },
    ];

    constructor() {
        const r: string | null = window.localStorage.getItem('recentSearch');
        if (typeof r === 'string') {
            this.recentSearch = JSON.parse(r);
        }
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