//Layout
// import { HeaderOnly } from '~/components/Layout';

import config from '~/config';

// Pages
import Home from '~/pages/Home';
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

// ContactPages
import AboutUs from '~/pages/ContactUs/Contactpages/AboutUs/AboutUs';
import Faqs from '~/pages/ContactUs/Contactpages/Faqs/faqs';
import DeliveryInformation from '~/pages/ContactUs/Contactpages/DeliveryInformation/DeliveryInformation';
import RefundPolicy from '~/pages/ContactUs/Contactpages/RefundPolicy/RefundPolicy';
import PrivacyPolicy from '~/pages/ContactUs/Contactpages/PrivacyPolicy/PrivacyPolicy';
import TermsCondition from '~/pages/ContactUs/Contactpages/TermsCondition/TermsCondition';
import ContactUsPage from '~/pages/ContactUs/Contactpages/ContactUsPage/ContactUsPage';
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.contactus, component: ContactUsPage },
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
    { path: config.routes.aboutus, component: AboutUs },
    { path: config.routes.faqs, component: Faqs },
    { path: config.routes.deliveryinformation, component: DeliveryInformation },
    { path: config.routes.refundpolicy, component: RefundPolicy },
    { path: config.routes.privacypolicy, component: PrivacyPolicy },
    { path: config.routes.termsconditions, component: TermsCondition },
    { path: config.routes.contactUs, component: ContactUsPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
