import classNames from 'classnames/bind';
import styles from '../ContactUs.module.scss';
import { Link } from 'react-router-dom';

import objNav from '../objNav';

const cx = classNames.bind(styles);

function ContactNav() {
    return (
        <div className={cx('wrapperNav')}>
            <div className={cx('inner')}>
                <ul className={cx('nav-list')}>
                    {objNav.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <li className={cx('nav-item')}>{item.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ContactNav;
