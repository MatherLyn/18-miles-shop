import { topCommodity } from './index';
import { sortCommodity } from './index';
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';


class Store {
    @observable public categories: Array<string> = ['居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行'];
    @observable public topCommodities: Array<topCommodity> = [
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
    @observable public tabs:Array<string> = ['新品推荐', '产品1', '产品2', '产品3', '产品4', '产品5', '产品6', '产品7', '产品8', '产品9', '产品10', '产品11', '产品12', '产品6', '产品7', '产品8', '产品9', '产品10', '产品11', '产品12'];
    @observable public sortCommodities: Array<sortCommodity>  = [
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
    constructor () {

    }
}

export default Store;