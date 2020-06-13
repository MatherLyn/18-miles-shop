# 18-miles-shop

A practice of electronic commerce website && A practice of TypescriptReact.

### To quick start, please run:
``` shell
$ npm i
$ npm start
```

### Technology stack:
Typescript + React + mobx + axios + react-router + element-ui + ant-d-mobile

### We are students:
- Studying at South China University of China
- Majoring in Computer Science.
- Software engineering class group work. Created by @create-react-app.

### Attention:
Time pressed(4 days for frontend developing) and here is the bad code practice in this project:
``` tsx
// 1. Use inject decorator in mobx instead of directly import store
// Reason: this will make observer reactive.

// outside the module
<Provider store={store}>
    <Example />
</Provider>

// bad
import { store } from '../../store';

class Example extends Component<IProps, IState> {
    private getStoreMember = () => { return store.member; }
}

// good
@inject('store')
@observer
class Example extends Component<IProps, IState> {
    private getStoreMember = () => { return this.props.store.member; }
}

// 2. Fetching data in ComponentDidMount
// Reason: if the http request fails, this won't block rendering.

// bad
class Example extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        fetchData().then(res => console.log(res));
    }
}

// good
class Example extends Component<IProps, IState> {
    async ComponentDidMount () {
        const res = await fetchData();
        console.log(res);
    }
}

// 3. Add necessary error message when http request fails
// Reason: it is just necessary.

// bad
async getProfile () {
    const res = await utils.getProfile();
    if (res.data.errcode === 0) {
        // do something...
    }
}

// good
async getProfile () {
    const res = await utils.getProfile();
    if (res.data.errcode === 0) {
        // do something...
    } else {
        Message.error('The request has failed.');
    }
}

// 4. Also, make sure when some code fails, your program will not crash
// Reason: it is just necessary.

// bad
const sku = this.item.skus.filter(item => item.id === this.state.skuId)[0];

// good
let sku;
try {
    sku = this.item.skus.filter(item => item.id === this.state.skuId)[0];
} catch (e) {
    Message.error('Fetch sku failed.')
}

// 5. Proper commit message is required
// Reason: it is just necessary.

// bad
// package.json
{
    "script": {
        "push": "git add . && git commit -m \"some message\" && git push origin master"
    }
}

// good
// shell
"git commit -m \"feat: utils中新增路由传参功能。\""
```