// library
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import HeaderTop from '~/components/Layout/Components/Header/HeaderTop';
import HeaderMid from '~/components/Layout/Components/Header/HeaderMid';
import HeaderNav from '~/components/Layout/Components/Header/HeaderNav';
import Footer from '~/components/Layout/Components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderTop />
            <HeaderMid />
            <HeaderNav />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
