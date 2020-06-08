
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
    }
]

export default routes;