//Layout
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import ContactUs from '~/pages/ContactUs';
import Register from '~/pages/Register';
import WishList from '~/pages/WishList';
import CheckOut from '~/pages/CheckOut';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contactus', component: ContactUs },
    { path: '/register', component: Register },
    { path: '/wishlist', component: WishList, layout: HeaderOnly },
    { path: '/checkout', component: CheckOut },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
