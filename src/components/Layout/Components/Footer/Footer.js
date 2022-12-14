import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import FooterTop from './FooterTop';
import FooterMid from './FooterMid';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <FooterTop />
            <FooterMid />
        </div>
    );
}

export default Footer;
