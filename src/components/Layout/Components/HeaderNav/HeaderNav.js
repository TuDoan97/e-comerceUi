import classNames from 'classnames/bind';
import styles from './HeaderNav.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function HeaderNav() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul className={cx('nav-list')}>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.accessories}>Accessories</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.beauty}>Beauty</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.children}>Children</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.shoes}>Shoes</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.womensClothing}>Womens Clothing</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.brands}>Brands</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.giftVouchers}>Gift Vouchers</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.blog}>Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderNav;
