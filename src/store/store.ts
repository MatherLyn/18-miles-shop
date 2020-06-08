import { TopCommodity, Category, Good, SortCommodity, UserInfo, CommodityDetail } from './index';
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';

class Store {
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
    @observable public topCommodities: Array<TopCommodity> = [
        {
            'tag': ['标签1', '标签', '标签'],
            'name': '标签',
            'price': 30
        },
        {
            'tag': ['标签', '标签'],
            'name': '标签',
            'price': 33
        },
        {
            'tag': ['标签', '标签', '标签'],
            'name': '标签',
            'price': 45
        },
        {
            'tag': ['标签', '标签', '标签'],
            'name': '标签',
            'price': 45
        },
        {
            'tag': ['标签', '标签', '标签'],
            'name': '标签',
            'price': 45
        },
        {
            'tag': ['标签', '标签', '标签'],
            'name': '标签',
            'price': 45
        }
    ];
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
    ]
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
    
    @observable public userInfo: UserInfo = {

    }
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
    ]

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
                comment: "好！物美价廉"
              },
              {
                star: 1,
                comment: "垃圾鞋子，一个星都不想给，穿一星期就烂了"
              }
            ]
          }
    ];

    @computed get totalPrice () {
        let result: number = 0;
        for (let i: number = 0; i < this.cart.length; i++) {
            if (this.cart[i].isChecked) {
                result += this.cart[i].price * this.cart[i].num;
            }
        }
        return result;
    }


    constructor() {
    }
}

export default Store;