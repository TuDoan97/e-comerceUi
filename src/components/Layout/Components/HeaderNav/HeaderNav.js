import classNames from 'classnames/bind';
import styles from './HeaderNav.module.scss';

const cx = classNames.bind(styles);

function HeaderNav() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </div>
    );
}

export default HeaderNav;
