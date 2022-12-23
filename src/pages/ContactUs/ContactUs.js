import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';

import ContactNav from './ContactNav';

const cx = classNames.bind(styles);

function ContactUs({ children }) {
    return (
        <div className={cx('wrapper')}>
            <ContactNav />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default ContactUs;
