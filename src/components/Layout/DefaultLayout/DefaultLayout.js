// library
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import HeaderTop from '~/components/Layout/Components/HeaderTop';
import HeaderMid from '~/components/Layout/Components/HeaderMid';
import HeaderNav from '~/components/Layout/Components/HeaderNav';

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
        </div>
    );
}

export default DefaultLayout;
