import React, { Component } from 'react';
import { Rate, Input, Message } from 'element-react';
import commodity1 from './images/commodity1.png';
import './index.less';
import { releaseComment } from '../../cgi';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { collectAnchor } from '../../util';

interface IProps extends RouteComponentProps {
    
};

interface IState {
    comment: string;
    star: number;
};

class Comment extends Component<IProps, IState> {
    private spuId: number;

    constructor (props: IProps) {
        super(props);
        this.state = {
            comment: '',
            star: 0,
        }
        this.spuId = parseInt(collectAnchor(window.location.href).get('spuId') as string) as number;
    }

    handleReturn = () => {
        this.props.history.goBack();
    };

    releaseComment = async () => {
        const releaseRes = await releaseComment(this.spuId, this.state);
        if (releaseRes.data.errcode === 0) {
            Message.success('评价成功');
            this.props.history.replace('/process');
        }
    }

    render() {
        return (
            <div className="comment">
                <div className="head">
                    <div className="left-box">
                        <div className="return-icon" onClick={this.handleReturn}>
                            <div className="r-icon"></div>
                        </div>
                        <h1 className="title">发表评价</h1>
                    </div>
                    <div className="publish" onClick={this.releaseComment}>发布</div>
                </div>
                <div className="wrapper">
                    <div className="content">
                        <div className="commodity-box">
                            <img className="image" src={commodity1} alt="" />
                            <div className="commidity-describe">
                                <h1 className="name">这里是商品名字</h1>
                                <h2 className="detail">这里是商品描述</h2>
                            </div>
                        </div>
                        <div className="a-wrapper">
                            <div className="demonstration">商品评价</div>
                            <div className="star-box">
                                <Rate showText={true} colors={['#FF5000','#FF5000','#FF5000']} value={this.state.star} onChange={(value: any) => this.setState({ star: value })} />
                            </div>
                        </div>
                        <Input
                            type="textarea"
                            rows={3}
                            placeholder="从多个角度评价宝贝，可以帮助更多想买的人"
                            className="input"
                            value={this.state.comment}
                            onChange={(value: any) => this.setState({ comment: value })}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Comment);