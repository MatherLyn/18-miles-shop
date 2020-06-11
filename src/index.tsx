import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { getAddressList, getUserProfile } from './cgi';
import { store } from './store';

(async function () {
    const addrres = await getAddressList();
    if (addrres.data.errcode === 0) {
        store.addresses = addrres.data.data;
    }
    await getUserProfile();
})();


ReactDOM.render(
    <App />,
    document.getElementById('root')
);