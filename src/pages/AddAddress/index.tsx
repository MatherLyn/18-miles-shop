import React, { Component } from 'react'
import { Switch, MessageBox,Input } from 'element-react'
import './index.less';
import { AddressInfo } from '../../store';
import { collectAnchor } from '../../util';

interface IProps {
    history: any,

};
interface IState {
    address: AddressInfo;
};

class AddAddress extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        const paramMap: Map<string, string> = collectAnchor(window.location.href);
        this.state = {
            address: {
                default: false,
                province: '',
                city: '',
                county: '',
                postal_code: '',
                address: '',
                recipient: '',
                phone: '',
            }
        }
        if (paramMap.size !== 0) {
            this.state = {
                address: this.convertParamToAddressInfo(paramMap)
            }
        }
    };

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

    handleAdd = () => {
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
        //检查完成后发请求..

    };

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
                    <h1>添加收货地址</h1>
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
            </div>
        )
    }
}

export default AddAddress;