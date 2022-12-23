import classNames from 'classnames/bind';
import styles from '../ContactUsPage.module.scss';

const cx = classNames.bind(styles);

function ContactInfo() {
    return (
        <div className={cx('wrapperInfo')}>
            <div className={cx('innerInfo')}>
                <h2 className={cx('info-title')}>Contact Us</h2>
                <p className={cx('info-desc')}>You can get in touch with us using the details below:</p>
                <div className={cx('content-info')}>
                    <ul className={cx('contact-method-list')}>
                        <li className={cx('method-item')}>BY PHONE</li>
                        <li className={cx('method-item')}>BY EMAIL</li>
                        <li className={cx('method-item')}>OUR ADDRESS</li>
                    </ul>

                    <ul className={cx('contact-detail-list')}>
                        <li className={cx('detail-item')}>0330 111 2024</li>
                        <li className={cx('detail-item')}>
                            <a
                                className={cx('email-address')}
                                href="https://www.google.com/search?q=gmail&oq=gmail&aqs=chrome.0.69i59j0i67i131i433j0i67i433j0i67j0i512l2j69i61l2.5094j0j4&sourceid=chrome&ie=UTF-8"
                            >
                                thanhtu0166559@gmail.com
                            </a>
                        </li>
                        <li className={cx('detail-item')}>Suite 3 17 Wrens Court Sutton Coldfield B72 1RT </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
