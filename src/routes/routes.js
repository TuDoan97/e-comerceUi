//Layout
import { HeaderOnly } from '~/components/Layout';

import config from '~/config';

// Pages
import Home from '~/pages/Home';
import ContactUs from '~/pages/ContactUs';
import Register from '~/pages/Register';
import WishList from '~/pages/WishList';
import CheckOut from '~/pages/CheckOut';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.contactus, component: ContactUs },
    { path: config.routes.register, component: Register },
    { path: config.routes.wishlist, component: WishList },
    { path: config.routes.checkout, component: CheckOut },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
