import React, { Component } from 'react';
import "./index.less"
import commodity1 from './images/commodity1.png'
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {
  index: number;
  tag: Array<string>;
  name: string;
  price: number;
}

interface IState {
}


//商品展示盒子3
class CommodityShow1 extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  handleRedirectToDetail = (index: number) => {
    this.props.history.push(`/commoditydetail/${index}`);
  }

  renderSpan = this.props.tag.map((content, index) => {
    return (
      <span className="spanBox" key={index}>
        {content}
      </span>
    );
  });

  render() {
    return (
      <div className="commodityBox" onClick={e => this.handleRedirectToDetail(this.props.index)}>
        <div className="images">
          <img className="commodityImage" src={commodity1} alt="商品图片" />
        </div>
        <div className="commodityDetail">
          <div className="span-box-container">{this.renderSpan}</div>
          <h2 className="commodityName">{this.props.name}</h2>
          <div className="bottomBox">
            <div className="commodityPrice">{`¥ ${this.props.price}`}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CommodityShow1);
