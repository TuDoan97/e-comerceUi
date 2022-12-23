import classNames from 'classnames/bind';

import ContactNav from '../../ContactNav';
import styles from './PrivacyPolicy.module.scss';
import objPolicy from '../../objPrivacyPolicy';

const cx = classNames.bind(styles);

function PrivacyPolicy() {
    return (
        <div className={cx('wrapper')}>
            <ContactNav />

            <div className={cx('inner')}>
                <h2 className={cx('title')}>PRIVACY POLICY</h2>
                <ul className={cx('content')}>
                    {objPolicy.map((item, index) => {
                        let data = item.data;
                        let boldText = item.boldtext;
                        let title = item.title;

                        if (data) {
                            return (
                                <div className={cx('title-have-data')} key={index}>
                                    <li className={cx('policy-item')}>{title}</li>
                                    <ul className={cx('bullet-points')}>
                                        {data.map((item, index) => {
                                            return (
                                                <li className={cx('bullet-point')} key={index}>
                                                    {item.bulletpoint}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        } else if (boldText) {
                            return (
                                <div className={cx('title-have-bold-text')}>
                                    <span className={cx('policy-title')}>{boldText}</span>
                                    <li className={cx('policy-item')}>{title}</li>
                                </div>
                            );
                        } else {
                            return (
                                <li className={cx('policy-item')} skey={index}>
                                    {item.title}
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
