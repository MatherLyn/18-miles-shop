import React, { Component } from 'react';
import "./index.less"
import commodity1 from './images/commodity1.png'
import shoppingCart from './images/shoppingCart.svg'

//商品展示盒子1
class CommodityShow1 extends Component {

  handleAddToCart = () => {
    //将对应的商品加入购物车
    console.log("加入购物车")
  };
  renderSpan = this.props.tag.map((content) => {
    return (
      <span className="spanBox">
        {content}
      </span>
    );
  });

  render() {
    return (
      <div className="commodityBox">
        <div className="images">
          <img className="commodityImage" src={commodity1} alt="商品图片" />
          <div className="serialNumber">{this.props.index + 1}</div>
        </div>
        <div className="commodityDetail">
          {this.renderSpan}
          <h2 className="commodityName">{this.props.name}</h2>
          <div className="bottomBox">
            <h2 className="commodityPrice">{this.props.price}</h2>
            <div className="commodityCollect" onClick={this.handleAddToCart}><img src={shoppingCart} alt="收藏"></img></div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommodityShow1;
