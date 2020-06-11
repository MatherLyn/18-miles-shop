import React, { Component } from 'react';
import { store, Comment, ItemDetail } from '../../store';
import { Rate } from 'element-react';
import { Carousel } from 'element-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getComments, getCommodityDetail } from '../../cgi';
import { addAnchor, collectAnchor } from '../../util';
import './index.less';

interface IProps extends RouteComponentProps {

}

interface IState {
    showComments: boolean;
    comment: string;
}

class CommodityDetail extends Component<IProps, IState> {
    private comments: Array<Comment> = [];
    private inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    private item: ItemDetail = {
        spu_id: 0,
        name: '',
        spu_pic: '',
        category: {
            id: 0,
            name: '',
            father_id: 0
        },
        attrs: [
            {
                id: 0,
                name: '颜色',
                value: [
                    {
                        id: 0,
                        name: '正红'
                    },
                    {
                        id: 1,
                        name: '橘色'
                    }
                ],
            },
            {
                id: 1,
                name: '尺寸',
                value: [
                    {
                        id: 0,
                        name: '大'
                    },
                    {
                        id: 1,
                        name: '小'
                    }
                ],
            },
        ],
        skus: [
            {
                id: 0,
                name: "一件衣服",
                sku_pic: "string",
                des_pic: "string",
                price: "string",
                stock: 0,
                sales: 0,
                attrs: [],
                v: [],
            },
            {
                id: 0,
                name: "一件衣服",
                sku_pic: "string1",
                des_pic: "string1",
                price: "string",
                stock: 0,
                sales: 0,
                attrs: [],
                v: [],
            },
            {
                id: 0,
                name: "一件衣服",
                sku_pic: "string2",
                des_pic: "string2",
                price: "string",
                stock: 0,
                sales: 0,
                attrs: [],
                v: [],
            },
            {
                id: 0,
                name: "一件衣服",
                sku_pic: "string3",
                des_pic: "string3",
                price: "string",
                stock: 0,
                sales: 0,
                attrs: [],
                v: [],
            },
        ]
    };
    private spuId: number;
    constructor(props: IProps) {
        super(props);
        this.state = {
            showComments: false,
            comment: '',
        }
        this.spuId = parseInt(collectAnchor(window.location.href).get('spuId') as string) as number;
    }

    async componentDidMount() {
        const tryCache = store.detailCache.filter(item => item.spu_id === this.spuId);
        if (tryCache.length === 1) {
            this.item = tryCache[0];
        } else {
            const cdRes = await getCommodityDetail(this.spuId);
            if (cdRes.data.errcode === 0) {
                this.item = cdRes.data.data;
                store.detailCache.push(cdRes.data.data);
                this.setState({})
            }
        }
    }

    toggleComments = async () => {
        if (this.comments.length === 0) {
            const commentRes = await getComments(this.spuId);
            if (commentRes.data.errcode === 0) {
                this.comments = commentRes.data.data as Array<Comment>;
            }
        }
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
    }

    handleSearch = () => {
        const param = {
            page: 1,
            page_num: 9,
            keyword: this.inputRef.current?.value
        }
        this.props.history.push(addAnchor('/searchResult', param));
    }

    render() {
        return (
            <div className="commodity-detail">
                <div className="header">
                    <div className="searchBox">
                        <div className="return-icon" onClick={this.handleReturn}>
                            <div className="icon"></div>
                        </div>
                        <input type="text" placeholder="想找点啥？" ref={this.inputRef} />
                        <div className="confirmSearch" onClick={this.handleSearch}>搜索</div>
                    </div>
                </div>

                <div className="middle-content">
                    <div className="wrapper">
                        {/* <div className="commodity-image" style={{
                            backgroundImage: `url(${this.item.skus[0]?.sku_pic})`
                        }}></div> */}
                        <Carousel height="200px">
                            {
                                this.item.skus.map((item, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <img src={item.sku_pic} alt="" />
                                            <div>{index}</div>
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                        <div className="commodity-info">
                            <div className="commodity-price">{`¥ ${this.item.skus[0]?.price || ''}`}</div>
                            <div className="commodity-name">{this.item.name || ''}</div>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="commodity-attribute">
                            {/* {this.item.skus[0]?.attrs.map((item, index) => <div key={index}>
                                <div>属性名：{this.item.skus[0]?.attrs[0]}</div>
                                <div>属性值：{this.item.skus[0]?.v[0]}</div>
                            </div>)} */}
                            {/* <div className="attr-title">商品属性</div> */}
                            {
                                this.item.attrs.map((item, index) =>
                                    <div key={index} className="attr-item">
                                        <div className="attr-name">{`${item.name}`}</div>
                                        {
                                            item.value.map((content, k) => (
                                                <div className="attr-value" key={k}>{`${content.name}${k === item.value.length - 1 ? '' : '， '}`}</div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="commodity-comment" onClick={this.toggleComments}>
                            <div className="commodity-comment-title">{`宝贝评价`}</div>
                            <div className="commodity-comment-show-all">查看全部</div>
                        </div>
                    </div>

                    <div className="wrapper">
                        {/* <div className="commodity-description-image" style={{
                            backgroundImage: `url(${this.item.skus[0]?.des_pic})`
                        }}></div> */}
                        {
                            this.item.skus.map((content, index) => (
                                <div key={index} className="commodity-description-image" style={{
                                    backgroundImage: `url(${content.des_pic})`
                                }}>{index}</div>
                            ))
                        }
                    </div>

                </div>

                <div className="bottom-box">
                    <div className="add-to-cart bottom-button">加入购物车</div>
                    <div className="buy-now bottom-button">立即购买</div>
                </div>

                <div
                    className="comments"
                    style={{
                        bottom: this.state.showComments ? '0px' : '-300px'
                    }}
                >
                    <div className="comments-show">
                        {this.comments.map((item, index) =>
                            <div key={index} className="comment-this.item">
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