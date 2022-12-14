import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul className={cx('left')}>
                    <li className={cx('home')}>
                        <Link to={config.routes.home}>Home</Link>
                    </li>
                    <li className={cx('contact')}>
                        <Link to={config.routes.contactus}>Contact Us</Link>
                    </li>
                </ul>
                <ul className={cx('right')}>
                    <li className={cx('account')}>
                        <Link to={config.routes.register}>Your Account</Link>
                    </li>
                    <li className={cx('wish-list')}>
                        <Link to={config.routes.wishlist}>Wishlist</Link>
                    </li>
                    <li className={cx('price')}>$0.00</li>
                    <button className={cx('checkout')}>
                        <Link to={config.routes.checkout}>checkout</Link>
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default HeaderTop;
