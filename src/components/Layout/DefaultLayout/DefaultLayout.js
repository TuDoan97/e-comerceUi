import HeaderTop from '~/components/Layout/Components/HeaderTop';
import HeaderMid from '~/components/Layout/Components/HeaderMid';
import HeaderNav from './HeaderNav';

function DefaultLayout({ children }) {
    return (
        <div>
            <HeaderTop />
            <HeaderMid />
            <HeaderNav />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
