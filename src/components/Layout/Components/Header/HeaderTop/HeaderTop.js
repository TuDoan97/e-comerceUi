import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import { faArrowUpRightFromSquare, faCashRegister, faUserTie, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faXmark} />,
        title: 'Need help? Contact us',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowUpRightFromSquare} />,
        title: 'Sign In',
    },
    {
        icon: <FontAwesomeIcon icon={faUserTie} />,
        title: 'Register',
    },
    {
        icon: <FontAwesomeIcon icon={faCashRegister} />,
        title: ' Trade Account Registration',
    },
];

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
