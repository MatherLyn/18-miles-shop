import React, { Component } from 'react';
import "./index.less"
import commodity1 from './images/commodity1.png'
import details from './images/details.svg'

//商品展示盒子2
class CommodityShow2 extends Component {

  handleDetail() {
    //显示操作详情
    console.log("显示操作详情");
  }

  renderSpan = this.props.tag.map((content) => {
    return (
      <span className="spanBox">
        {content}
      </span>
    );
  });

  render() {
    return (
      <div className="commodityBox2">
        <img className="commodityImage" src={commodity1} alt="商品图片" />
        <div className="commodityDetails">
          <h1>{this.props.name}</h1>
          <div className="tagBox">
            {this.renderSpan}
          </div>
          <div className="bottomBox">
            <h1>{this.props.price}</h1>
            <img className="showDetail" onClick={this.handleDetail} src={details} alt="操作详情"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default CommodityShow2;
