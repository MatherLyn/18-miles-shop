import React, { Component } from 'react'
import { Switch, MessageBox,Input, Message } from 'element-react'
import './index.less';
import { AddressInfo, store } from '../../store';
import { collectAnchor } from '../../util';
import { modifyAddress, addAddress, deleteAddress } from '../../cgi';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps{

};
interface IState {
    address: AddressInfo;
};

class AddAddress extends Component<IProps, IState> {
    private addressId: number;

    constructor(props: IProps) {
        super(props);
        const paramMap: Map<string, string> = collectAnchor(window.location.href);
        this.addressId = parseInt(paramMap.get('addressId') as string);
        this.state = {
            address: {
                default: false,
                province: '',
                city: '',
                county: '',
                postal_code: '123',
                address: '',
                recipient: '',
                phone: '',
            }
        }
        if (paramMap.size !== 0) {
            this.state = {
                address: this.convertParamToAddressInfo(paramMap)
            }
            this.pageTitle="编辑收货地址";
        }
    };

    pageTitle:string="添加收货地址";
    convertParamToAddressInfo = (map: Map<string, string>): AddressInfo => {
        const keys: Array<string> = Reflect.ownKeys(this.state.address) as Array<string>;
        const result: any = {} as AddressInfo;
        try {
            for (let i: number = 0; i < keys.length; i++) {
                if (keys[i] === 'index') {
                    continue;
                }
                let value: string | number | boolean = map.get(keys[i]) as string;
                if (keys[i] === 'default') {
                    value = value === 'true' ? true : false;
                }
                result[keys[i]] = value;
            }
        } catch (e) {
            MessageBox.alert('获取用户地址失败，请重新尝试……')
        }
        return result;
    }

    handleAdd = async () => {
        if (this.state.address.recipient === '') {
            MessageBox.alert('收货人不能为空噢！', '');
            return;
        }
        if (this.state.address.phone === '') {
            MessageBox.alert('收货人手机号码不能为空噢！', '');
            return;
        }
        if (this.state.address.province === '' || this.state.address.city === '' || this.state.address.county === '' || this.state.address.address === '') {
            MessageBox.alert('收货地址输入有误！', '');
            return;
        }
        // 检查完成后发请求..
        // type为add时增加，type为modify时修改
        let res;
        if (this.addressId) {
            if (this.state.address.default && this.state.address.id !== store.defaultAddress) {
                const defaultOne = store.addresses.filter(item => item.id === store.defaultAddress)[0];
                const defaultChange = await modifyAddress({
                    ...defaultOne,
                    default: false
                });
                if (defaultChange.data.errcode === 0) {
                    res = await modifyAddress({
                        ...this.state.address,
                        id: this.addressId
                    });
                }
            } else {
                res = await modifyAddress({
                    ...this.state.address,
                    id: this.addressId
                });
            }
        } else {
            res = await addAddress(this.state.address);
        }
        if (res?.data.errcode === 0) {
            Message.success('修改成功');
            this.props.history.goBack();
        }
        if (this.state.address.postal_code === '') {
            MessageBox.alert('邮政编码不能为空噢！', '');
            return;
        }
        //检查完成后发请求..

    };

    handleDelete = async () => {
        const deleteRes = await deleteAddress(this.addressId);
        if (deleteRes.data.errcode === 0) {
            Message.success('修改成功');
            this.props.history.goBack();
        }
    }

    handleInputChange = (type: string, value: any) => {
        this.setState({
            address: {
                ...this.state.address,
                [type]: value
            }
        })
    }

    handleReturn = () => {
        this.props.history.goBack();
    };

    handleSwitchOnChange = (e: any) => {
        this.state.address.default = e;
    };

    render() {
        return (
            <div className="add-address">
                <div className="add-address-head">
                    <div className="return-icon" onClick={this.handleReturn}>
                        <div className="r-icon"></div>
                    </div>
                    <h1>{this.pageTitle}</h1>
                    <div className="add-save" onClick={this.handleAdd}>保存</div>
                </div>
                <div className="add-address-main-box">
                    <Input className="input" placeholder="收货人" value={this.state.address.recipient} onChange={value => this.handleInputChange('recipient', value)}></Input>
                    <Input className="input" placeholder="手机号码" value={this.state.address.phone} onChange={value => this.handleInputChange('phone', value)}></Input>
                    <div className="concret-address">
                        <Input className="province" placeholder="例：广东" value={this.state.address.province} onChange={value => this.handleInputChange('province', value)}></Input><div className="tips">省</div>
                        <Input className="city" placeholder="例：广州" value={this.state.address.city} onChange={value => this.handleInputChange('city', value)}></Input><div className="tips">市</div>
                        <Input className="county" placeholder="例：天河" value={this.state.address.county} onChange={value => this.handleInputChange('county', value)}></Input><div className="tips">区</div>
                    </div>
                    <Input className="input" placeholder="详细地址" value={this.state.address.address} onChange={value => this.handleInputChange('address', value)}></Input>
                    <Input className="input" placeholder="邮政编码" value={this.state.address.postal_code} onChange={value => this.handleInputChange('postal_code', value)}></Input>
                    <div className="a-box">
                        <h1 className="label">设为默认地址</h1>
                        <Switch
                            value={this.state.address.default}
                            onText=""
                            offText=""
                            onChange={e => this.handleSwitchOnChange(e)}
                        >
                        </Switch>
                    </div>
                </div>
                <div className="delete" style={{display:this.pageTitle==="编辑收货地址"?'block':'none'}}>删除收货地址</div>
            </div>
        )
    }
}

export default withRouter(AddAddress);