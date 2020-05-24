import { commodity } from './index';
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';


class Store {
    @observable public categories: Array<string> = ['居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行', '居家旅行'];
    @observable public commodities: Array<commodity> = [
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
    ]

    constructor () {

    }
}

export default Store;