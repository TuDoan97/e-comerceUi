import classNames from 'classnames/bind';

import RegisterNav from './RegisterNav';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register({ children }) {
    return (
        <div className={cx('wrapper')}>
            <RegisterNav />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Register;
