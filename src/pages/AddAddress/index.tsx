import React, { Component } from 'react'
import { Switch, MessageBox } from 'element-react'
import returnIcon from './images/return.png'
import './index.less';
import { AddressInfo } from '../../store';
import { collectAnchor } from '../../util';

interface IProps {
    history: any,

};
interface IState {

};

class AddAddress extends Component<IProps, IState> {
    private address: AddressInfo = {
        default: false,
        province: '',
        city: '',
        county: '',
        postal_code: '',
        address: '',
        recipient: '',
        phone: '',
    };

    constructor(props: IProps) {
        super(props);
        const paramMap: Map<string, string> = collectAnchor(window.location.href);
        if (paramMap.size === 0) {
            
        } else {
            this.address = this.convertParamToAddressInfo(paramMap);
        }
    };

    convertParamToAddressInfo = (map: Map<string, string>): AddressInfo => {
        const keys: Array<string> = Reflect.ownKeys(this.address) as Array<string>;
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
        if (this.address.recipient === '') {
            MessageBox.alert('收货人不能为空噢！', '');
            return;
        }
        if (this.address.phone === '') {
            MessageBox.alert('收货人手机号码不能为空噢！', '');
            return;
        }
        if (this.address.province === ''||this.address.city === ''||this.address.county === ''||this.address.address === '') {
            MessageBox.alert('收货地址输入有误！', '');
            return;
        }
        //检查完成后发请求..
        
    };

    handleReturn = () => {
        this.props.history.goBack();
    };

    handleSwitchOnChange = (e: any) => {
        this.address.default = e;
    };
    render() {
        return (
            <div className="add-address">
                <div className="add-address-head">
                    <img src={returnIcon} alt="" onClick={this.handleReturn} />
                    <h1>新的收货地址</h1>
                    <div className="add-address" onClick={this.handleAdd}>保存</div>
                </div>
                <div className="add-address-main-box">
                    <input className="input" placeholder="收货人" value={this.address.recipient}></input>
                    <input className="input" placeholder="手机号码" value={this.address.phone}></input>
                    <input className="input" placeholder="详细地址" ></input>
                    <div className="a-box">
                        <h1 className="label">设为默认地址</h1>
                        <Switch
                            value={false}
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