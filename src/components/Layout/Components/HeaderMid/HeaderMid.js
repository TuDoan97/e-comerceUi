import classNames from 'classnames/bind';
import styles from './HeaderMid.module.scss';

const cx = classNames.bind(styles);

function HeaderMid() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </div>
    );
}

export default HeaderMid;
