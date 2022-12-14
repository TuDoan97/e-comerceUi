//Layout
// import { HeaderOnly } from '~/components/Layout';

import config from '~/config';

// Pages
import Home from '~/pages/Home';
import ContactUs from '~/pages/ContactUs';
import Register from '~/pages/Register';
import WishList from '~/pages/WishList';
import CheckOut from '~/pages/CheckOut';
import Accessories from '~/pages/Accessories';
import Beauty from '~/pages/Beauty';
import Children from '~/pages/Children';
import Shoes from '~/pages/Shoes';
import WomensClothing from '~/pages/WomensClothing';
import Brands from '~/pages/Brands';
import GiftVouchers from '~/pages/GftVouchers/GiftVouchers';
import Blog from '~/pages/Blog';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.contactus, component: ContactUs },
    { path: config.routes.register, component: Register },
    { path: config.routes.wishlist, component: WishList },
    { path: config.routes.checkout, component: CheckOut },
    { path: config.routes.accessories, component: Accessories },
    { path: config.routes.beauty, component: Beauty },
    { path: config.routes.children, component: Children },
    { path: config.routes.shoes, component: Shoes },
    { path: config.routes.womensClothing, component: WomensClothing },
    { path: config.routes.brands, component: Brands },
    { path: config.routes.giftVouchers, component: GiftVouchers },
    { path: config.routes.blog, component: Blog },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
