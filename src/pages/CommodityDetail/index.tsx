import React, { Component } from 'react';
import { store, Comment, ItemDetail } from '../../store';
import { Rate, Message } from 'element-react';
import { Carousel } from 'element-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { getComments, getCommodityDetail, saveToCart } from '../../cgi';
import { addAnchor, collectAnchor } from '../../util';
import './index.less';

interface IProps extends RouteComponentProps {

}

interface IState {
    skuId: number;
    stock: number;
    attr: number;
    val: number;
    num: number;
    showComments: boolean;
    comment: string;
    showBuy: boolean;
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
                values: [
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
                values: [
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
                id: 1,
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
                id: 2,
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
                id: 3,
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
    private selectAttr: Array<number> = [];
    private selectAttrValue: Array<number> = [];
    constructor(props: IProps) {
        super(props);
        this.state = {
            skuId: 0,
            attr: 0,
            val: 0,
            stock: 0,
            num: 1,
            showComments: false,
            showBuy: false,
            comment: '',
        }
        this.spuId = parseInt(collectAnchor(window.location.href).get('spuId') as string) as number;
    }

    async componentDidMount() {
        if (store.detailCache && store.detailCache.spu_id === this.spuId) {
            this.item = store.detailCache;
        } else {
            const cdRes = await getCommodityDetail(this.spuId);
            if (cdRes.data.errcode === 0) {
                this.item = cdRes.data.data;
                store.detailCache = cdRes.data.data;
            }
        }
        this.setState({
            skuId: this.item?.skus[0]?.id
        })
        for (let i: number = 0; i < this.item.attrs.length; i++) {
            for (let j: number = 0; j < this.item.attrs[i].values.length; j++) {
                this.selectAttr.push(this.item.attrs[i].id);
                this.selectAttrValue.push(this.item.attrs[i].values[j].id);
            }
        }
    }

    showBuy = () => {
        this.setState({
            showBuy: true,
            showComments: false,
        })
    }

    hideAll = () => {
        this.setState({
            showBuy: false,
            showComments: false
        })
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

    // 加入购物车
    showShowBuy = () => {
        if (!store.isLogin) {
            Message.error('请先登录');
            this.props.history.push('/profile');
            return;
        }
        this.setState({
            showBuy: true
        })
    }

    // 立即购买
    addToOrder = () => {
        if (!store.isLogin) {
            Message.error('请先登录');
            this.props.history.push('/profile');
            return;
        }
        for (let i: number = 0; i < this.item.skus.length; i++) {
            let b = false;
            for (let j: number = 0; j < this.item.skus[i].attrs.length; j++) {
                if (this.item.attrs[0].id === this.selectAttr[i] && this.item.attrs[0].values[0].id === this.selectAttrValue[i]) {
                    store.buySku = this.item.skus[i];
                    b = true;
                    break;
                }
                if (b) {
                    break;
                }
            }
        }
        return this.props.history.push(addAnchor('/settlement', {
            skuId: this.item.skus[0].id,
            num: this.state.num,
            attr: this.item.skus[0].attrs[0],
            val: this.item.skus[0].v[0]
        }));
    }

    selectSku = (attrIndex: number, attrValIndex: number) => {
        let skuId: number = 0;
        for (let i: number = 0; i < this.item.skus.length; i++) {
            let b = false;
            for (let j: number = 0; j < this.item.skus[i].attrs.length; j++) {
                if (attrIndex === this.selectAttr[i] && attrValIndex === this.selectAttrValue[i]) {
                    store.buySku = this.item.skus[i];
                    skuId = store.buySku.id;
                    b = true;
                    break;
                }
                if (b) {
                    break;
                }
            }
        }
        this.setState({
            skuId: skuId,
            attr: attrIndex,
            val: attrValIndex
        })
    }

    changeNum = (offset: number) => {
        if (offset === -1) {
            if (this.state.num === 1) {
                return;
            }
        } else if (offset === 1) {
            if (this.state.num === this.state.stock) {
                return;
            }
        }
        this.setState({
            num: this.state.num + offset
        })
    }

    confirmToCart = async () => {
        if (!store.isLogin) {
            Message.error('请先登录');
            this.props.history.push('/profile');
            return;
        }
        if (this.state.attr && this.state.val) {
            await saveToCart({
                sku_id: this.state.skuId,
                num: this.state.num
            });
            this.props.history.push('/shoppingCart');
        }
    }

    render() {
        const sku = this.item.skus.filter(item => item.id === this.state.skuId)[0];
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
                        <Carousel height="200px">
                            {
                                this.item.skus.map((item, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <img src={item.sku_pic} alt="" />
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
                            {
                                this.item.attrs.map((item, attrIndex) =>
                                    <div key={attrIndex} className="attr-item">
                                        <div className="attr-name">{item.name}</div>
                                        {
                                            item.values.map((content, attrValIndex) => (
                                                <div
                                                    className="attr-value"
                                                    key={attrValIndex}
                                                >
                                                    {`${content.name}${attrValIndex === item.values.length - 1 ? '' : '， '}`}
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className="commodity-comment" onClick={this.toggleComments}>
                            <div className="commodity-comment-title">宝贝评价</div>
                            <div className="commodity-comment-show-all">查看全部</div>
                        </div>
                    </div>

                    <div className="wrapper">
                        {
                            this.item.skus.map((content, index) => (
                                <div key={index} className="commodity-description-image" style={{
                                    backgroundImage: `url(${content.des_pic})`
                                }}></div>
                            ))
                        }
                    </div>

                </div>

                <div className="bottom-box">
                    <div className="add-to-cart bottom-button" onClick={this.showShowBuy}>加入购物车</div>
                    <div className="buy-now bottom-button" onClick={this.addToOrder}>立即购买</div>
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

                <div className="buy-add-to-cart"
                    style={{
                        bottom: this.state.showBuy ? '0px' : '-900px'
                    }}
                >
                    <div className="commodity-top-box">
                        <img className="commodity-img" src={sku.sku_pic} alt="" />
                        <div className="middle-box">
                            <div className="commodity-price">{`¥ ${sku.price}`}</div>
                            <div className="commodity-stock">{`库存${sku.stock}件`}</div>
                        </div>
                        <div className="close-icon" onClick={this.hideAll}></div>
                    </div>
                    {
                        this.item.attrs.map((item, attrIndex) =>
                            <div key={attrIndex} className="commodity-box-attr-item">
                                <div className="commodity-box-attr-name">{`${item.name}`}</div>
                                <div className="commodity-box-attr-value-box">
                                    {
                                        item.values.map((content, attrValIndex) => (
                                            //选中某个属性，就加上一个样式类
                                            <div 
                                                className={`${'' === '' ? 'commodity-box-attr-value-foucus ' : ''}` + `commodity-box-attr-value`}
                                                key={attrValIndex}
                                                style={{
                                                    backgroundColor: (this.state.attr === item.id) && (this.state.val === content.id) ? 'rgb(255, 248, 246)' : '#eee',
                                                    color: (this.state.attr === item.id) && (this.state.val === content.id) ? 'rgb(255, 113, 0)' : '#333',
                                                    borderColor: (this.state.attr === item.id) && (this.state.val === content.id) ? 'rgb(255, 113, 0)' : '#eee'
                                                }}
                                                onClick={e => this.selectSku(item.id, content.id)}
                                            >{`${content.name}`}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                    <div className="purchase-quantity">
                        <div className="purchase-quantity-title">购买数量</div>
                        <div className="select-quantity">
                            {/* <div className="minus" onClick={() => this.modifyGoodCount(-1, item.num, index)}>-</div>
                            <div className="count">{''}</div>
                            <div className="plus" onClick={() => this.modifyGoodCount(1, item.num, index)}>+</div> */}
                            <div className="minus" onClick={e => this.changeNum(-1)}>-</div>
                            <div className="count">{this.state.num}</div>
                            <div className="plus" onClick={e => this.changeNum(1)}>+</div>

                        </div>
                    </div>
                    <div className="confirm-box">
                        <div className="confirm-button" onClick={this.confirmToCart}>确 定</div>
                    </div>
                </div>

                <div
                    className="mask"
                    style={{
                        visibility: this.state.showComments || this.state.showBuy ? 'visible' : 'hidden'
                    }}
                    onClick={this.hideAll}
                >
                </div>
            </div>
        );
    }
}

export default withRouter(CommodityDetail);