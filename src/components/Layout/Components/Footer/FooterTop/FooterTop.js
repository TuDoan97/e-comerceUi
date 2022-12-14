import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../Footer.module.scss';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookSquare,
    faInstagramSquare,
    faLinkedin,
    faPinterestSquare,
    faTwitterSquare,
    faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function FooterTop() {
    return (
        <div className={cx('wrapperTop')}>
            <div className={cx('inner')}>
                {/* about us */}
                <ul className={cx('about-us')}>
                    <li>
                        <h2>About Us</h2>
                    </li>
                    <li>About Us</li>
                    <li>My Account</li>
                    <li>Create Account</li>
                </ul>

                {/* Customer Information */}
                <ul className={cx('customer-information')}>
                    <li>
                        <h2>Customer Information</h2>
                    </li>
                    <li> Frequently Asked Questions</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Delivery Information</li>
                    <li>Refunds & Returns</li>
                </ul>

                {/* Connect With Us */}
                <ul className={cx('connect-withUs')}>
                    <li>
                        <h2>Connect With Us</h2>
                    </li>
                    <li className={cx('input')}>
                        <input type="email" placeholder="Enter your email address" />
                        <FontAwesomeIcon className={cx('input-icon')} icon={faChevronRight} />
                    </li>

                    <ul className={cx('icon')}>
                        <li>
                            <FontAwesomeIcon className={cx('facebook-icon')} icon={faFacebookSquare} />
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('twitter-icon')} icon={faTwitterSquare} />
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('linkin-icon')} icon={faLinkedin} />
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('pinterest-icon')} icon={faPinterestSquare} />
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('youtube-icon')} icon={faYoutubeSquare} />
                        </li>
                        <li>
                            <FontAwesomeIcon className={cx('insta-icon')} icon={faInstagramSquare} />
                        </li>
                    </ul>
                </ul>

                {/* Get In Touch */}
                <div className={cx('Get-in-Touch')}>
                    <h2>Get In Touch</h2>
                    <address className={cx('address')}>Suite 3, 17 Wrens Court, Sutton Coldfield, B72 1RT</address>
                    <p className={cx('footer-contact')}>
                        <span>T:</span>
                        0839467601
                    </p>
                    <p className={cx('footer-contact')}>
                        <span>E:</span>
                        <a href="mailto:thanhtu0166559@gmail.com">thanhtu0166559@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;
