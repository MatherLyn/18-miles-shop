import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import Menu from '../../components/Menu';
import { store } from '../../store';
import { observer } from 'mobx-react';
import { withRouter,RouteComponentProps } from 'react-router-dom';
import { doSearch } from '../../util';
import image1 from './images/commodity1.png';
import image2 from './images/commodity2.png';
import './index.less';

interface IProps extends RouteComponentProps {
}

interface IState {
    focusIndex: number
}

@observer
class Sort extends Component<IProps, IState> {
    public state: IState = {
        focusIndex: 0
    }

    public handleClick = (id: number, categoryId: number) => {
        const param = {
            category_id: categoryId,
            page: 1,
            page_num: 9,
        }
        doSearch(param, 'sortCommodities');
        this.setState({
            focusIndex: id
        });
    };

    public handleRedirectToDetail=(skuId:number)=>{
        this.props.history.push(`/commoditydetail/${skuId}`);
    };

    render() {
        return (
            <div id="sort">
                <SearchBar />
                <div className="container">
                    <Menu focusIndex={this.state.focusIndex} handleClick={this.handleClick} />
                    <div id="wrapper">
                        <div className="imgBox">
                            <img src={image1} alt="商品展示1" />
                        </div>
                        <div id="caption">
                            {'-- ' + store.tabs[this.state.focusIndex].name + ' --'}
                        </div>
                        <div id="displayBox">
                            {
                                store.sortCommodities.map((content, index) => (
                                    index >= this.state.focusIndex * 9 && index < (this.state.focusIndex + 1) * 9 ?
                                        (
                                            <div className="box" key={index} onClick={()=>this.handleRedirectToDetail(content.spu_id)}>
                                                <div
                                                    style={{
                                                        backgroundImage: `url(${content.spu_pic})`
                                                    }}
                                                />
                                                <h1>{content.name}</h1>
                                            </div>
                                        ) : (
                                            ''
                                        )
                                ))
                            }
                        </div>
                        <div className="imgBox">
                            <img src={image2} alt="商品展示2" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Sort);