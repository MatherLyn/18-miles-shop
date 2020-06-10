import React, { Component } from 'react';
import { store } from '../../store';
import { Input, Rate } from 'element-react';
import './index.less';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {

}

interface IState {
    showComments: boolean;
}

class CommodityDetail extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            showComments: false
        };
    }

    toggleComments = () => {
        if (this.state.showComments) {
            this.setState({
                showComments: false
            });
        } else {
            this.setState({
                showComments: true
            });
        }
    }

    handleReturn = () => {
        this.props.history.goBack();
    };

    handleSearch = () => {

    };

    /**
     * @todo 到时候写上真实的数据
     */
    render() {
        const item = store.detailCache[0];
        return (
            <div className="commodity-detail">
                <div className="header">
                    <div className="searchBox">
                        <div className="return-icon" onClick={this.handleReturn}>
                            <div className="icon"></div>
                        </div>
                        <input type="text" placeholder="想找点啥？" />
                        <div className="confirmSearch" onClick={this.handleSearch}>搜索</div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="commodity-image" style={{
                        backgroundImage: ``
                    }}></div>
                    <div className="commodity-info">
                        <div className="commodity-price">{`¥ ${item.price}`}</div>
                        <div className="commodity-name">{item.name}</div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="commodity-attribute">
                        {item.attrs.map((item, index) => <div key={index}>

                        </div>)}
                    </div>
                </div>

                <div className="wrapper">
                    <div className="commodity-comment" onClick={this.toggleComments}>
                        <div className="commodity-comment-title">{`宝贝评价 ()`}</div>
                        <div className="commodity-comment-show-all">查看全部</div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="commodity-description-image" style={{
                        backgroundImage: ``
                    }}></div>
                </div>

                <div
                    className="comments"
                    style={{
                        bottom: this.state.showComments ? '0px' : '-300px'
                    }}
                >
                    <div className="comments-show">
                        {item.comments.map((item, index) =>
                            <div key={index} className="comment-item">
                                <div className="avatar" style={{
                                    backgroundImage: ``
                                }}></div>
                                <div className="right-box">
                                    <div className="right-top-box">
                                        <div className="username">{item.username}</div>
                                        <Rate disabled={true} value={item.star} showText={true} />
                                    </div>
                                    <div className="comment-content">{item.comment}</div>
                                </div>
                            </div>
                        )
                        }
                    </div>
                    <div className="add-comment">
                        <Input className="make-comment-input" />
                        <div className="confirm">发布</div>
                    </div>
                </div>
                
                <div
                    className="mask"
                    style={{
                        visibility: this.state.showComments ? 'visible' : 'hidden'
                    }}
                    onClick={this.toggleComments}
                >    
                </div>
            </div>
        );
    }
}

export default withRouter(CommodityDetail);