
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Search from '../pages/Search';
import CommodityDetail from '../pages/CommodityDetail';
import SellWell from '../pages/SellWell';
import Sort from '../pages/Sort';
import ShoppingCart from '../pages/ShoppingCart';
import Settlement from '../pages/Settlement';
import Profile from '../pages/Profile';
<<<<<<< HEAD
import AddAddress from '../pages/AddAddress';
import Address from '../pages/Address';
import Setting from '../pages/Setting';
=======
import Process from '../pages/Process';
>>>>>>> 7bea4149e5a5c0ee37d403eea46b748b41d7ab6c

interface route {
    path: string;
    exact?: boolean;
    component: any;
}

const routes: Array<route> = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/sellwell',
        component: SellWell,
    },
    {
        path: '/sort',
        component: Sort,
    },
    {
        path: '/shoppingcart',
        component: ShoppingCart,
    },
    {
        path: '/settlement',
        component: Settlement,
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/commoditydetail',
        component: CommodityDetail
    },
    {
<<<<<<< HEAD
        path: '/setting',
        component: Setting
    },
    {
        path: '/addaddress',
        component: AddAddress
    },
    {
        path: '/address',
        component: Address
    },
=======
        path: '/process',
        component: Process
    }
>>>>>>> 7bea4149e5a5c0ee37d403eea46b748b41d7ab6c
]

export default routes;