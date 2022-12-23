import classNames from 'classnames/bind';

import ContactNav from '../../ContactNav';
import styles from './TermsCondition.module.scss';
import termsObj from './termsObj';

const cx = classNames.bind(styles);

function TermsCondition() {
    return (
        <div className={cx('wrapper')}>
            <ContactNav />

            <div className={cx('inner')}>
                <h2 className={cx('title')}>Terms & Condition</h2>
                {termsObj.map((item, index) => {
                    let data = item.data;
                    if (data) {
                        return (
                            <span key={index}>
                                <h3 className={cx('term-title')} key={index}>
                                    {item.title}
                                </h3>
                                <ul className={cx('term-list')}>
                                    {data.map((item, index) => {
                                        let child = item.childrenData;
                                        if (child) {
                                            return (
                                                <span key={index}>
                                                    <li className={cx('term-item')}>{item.subTitle}</li>
                                                    <ul className={cx('child-list')} key={index}>
                                                        {child.map((item, index) => {
                                                            return (
                                                                <li className={cx('child-item')} key={index}>
                                                                    {item.child}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </span>
                                            );
                                        } else {
                                            return (
                                                <li className={cx('term-item')} key={index}>
                                                    {item.subTitle}
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                            </span>
                        );
                    } else {
                        return <li className={cx('term-item')}>{item.title}</li>;
                    }
                })}
            </div>
        </div>
    );
}

export default TermsCondition;
