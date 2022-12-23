import classNames from 'classnames/bind';

import ContactNav from '../../ContactNav';
import styles from './AboutUs.module.scss';

const cx = classNames.bind(styles);

function AboutUs() {
    return (
        <div className={cx('wrapper')}>
            <ContactNav />

            <div className={cx('inner')}>
                <h2 className={cx('title')}>About Us</h2>
                <p className={cx('content')}>
                    This is a sample about us page. Using a page like About Us enables you to be able to describe your
                    company and what it does to your customers and the people that visit your website.
                </p>

                <p className={cx('content')}>
                    A well written About Us page gives your customers confidence in the quality of goods and services
                    that you are selling, and your experience in the industry that you're working in. Here are a few
                    things that you should write about:
                </p>

                <ul className={cx('content')}>
                    <li>Who the company is </li>
                    <li>Why you sell your items </li>
                    <li>Your experience and company history </li>
                    <li>Where you are located</li>
                </ul>

                <p className={cx('content')}>
                    You'll be able to edit the content of this page using the Management System.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
