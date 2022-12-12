import classNames from 'classnames/bind';
import styles from './HeaderNav.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from '~/config';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderNav() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul className={cx('nav-list')}>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.accessories}>
                            Accessories
                            <FontAwesomeIcon icon={faChevronDown} className={cx('icon-down')} />
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.beauty}>Beauty</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.children}>
                            Children
                            <FontAwesomeIcon icon={faChevronDown} className={cx('icon-down')} />
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.shoes}>Shoes</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.womensClothing}>
                            Womens Clothing
                            <FontAwesomeIcon icon={faChevronDown} className={cx('icon-down')} />
                        </Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link to={config.routes.brands}>
                            brands
                            <FontAwesomeIcon icon={faChevronDown} className={cx('icon-down')} />
                        </Link>
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
