import React, { Component } from 'react';
import CommodityShow1 from '../CommodityShow1';
import classnames from 'classnames';
import "./index.less";

class ShowSellWell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commodities: [
        {
          'tag': ['标签1', '标签1', '标签1'],
          'name': '商品名称1',
          'price': '￥30'
        },
        {
          'tag': ['标签2', '标签2'],
          'name': '商品名称2',
          'price': '￥33'
        },
        {
          'tag': ['标签3', '标签3', '标签3'],
          'name': '商品名称3',
          'price': '￥45'
        },
        {
          'tag': ['标签3', '标签3', '标签3'],
          'name': '商品名称4',
          'price': '￥45'
        },
        {
          'tag': ['标签3', '标签3', '标签3'],
          'name': '商品名称5',
          'price': '￥45'
        },
        {
          'tag': ['标签3', '标签3', '标签3'],
          'name': '商品名称6',
          'price': '￥45'
        }],
      categories: ['居家生活', '服饰鞋包', '美食酒水', '个人清洁', '母婴亲子', '居家生活', '居家生活', '居家生活', '居家生活'],
      //当前处在那个类别下，设置对应span标签的样式为被选中
      focusArr: [true, false, false, false, false, false, false, false, false]
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    //渲染类别标签栏
    this.renderCategories = this.state.categories.map((content, index) => {
      return (
        <span className={classnames('category', { 'categoryFocus': this.state.focusArr[index] })} id={index} onClick={(e) => this.handleOnClick(e)}>
          {content}
        </span>
      );
    });
    
    this.renderCommodities = this.state.commodities.map((content, index) => {
    if (this.props.topThree === true) {
      if (index < 3)
        return (
          <li key={index}>
            <CommodityShow1 index={index} tag={content.tag} name={content.name} price={content.price} />
          </li>
        );
      else
        return "";
    }
    else
      return (
        <li key={index}>
          <CommodityShow1 index={index} tag={content.tag} name={content.name} price={content.price} />
        </li>
      )
  });
  };

  //处理每个类别标签的点击事件
  handleOnClick = (e) => {
    console.log(e.currentTarget.id);
    var newArr = [];
    for (var i = 0; i < this.state.categories.length; i++) {
      newArr[i] = false;
    }
    newArr[e.currentTarget.id] = true;
    //emm不是说这个时候会setState会让react重新渲染吗...
    this.setState({ focusArr: newArr });
    console.log(this.state.focusArr);
  };

  render() {
    return (
      <div id="showSellWell">
        <div id="draggableBar">
          {this.renderCategories}
        </div>
        <ul>{this.renderCommodities}</ul>
      </div>
    );
  }
}

export default ShowSellWell;
