import classNames from 'classnames/bind';

import ContactNav from '../../ContactNav';
import styles from './Faqs.module.scss';

const cx = classNames.bind(styles);

function Faqs() {
    return (
        <div className={cx('wrapper')}>
            <ContactNav />

            <div className={cx('inner')}>
                <h2 className={cx('title')}>FAQS</h2>
                <p className={cx('content')}>This is page where you can write your most frequently asked questions.</p>

                <p className={cx('content')}>
                    Frequently asked questions help your visitors to find a quick answer to any question that they have
                    in real time, without having to contact you.
                </p>

                <p className={cx('content')}>
                    They can help increase sales made on your site, reduce drop out rates, and will save you having to
                    send the same answers to the same questions manually.
                </p>

                <p className={cx('content')}>
                    <span>You'll be able to control your frequently asked questions through the Management System</span>
                </p>
            </div>
        </div>
    );
}

export default Faqs;
