import classNames from 'classnames/bind';
import styles from './HeaderMid.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function HeaderMid() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Laucher" />
                    </Link>
                </div>

                <div className={cx('right')}>
                    <div className={cx('region-price')}>
                        <img className={cx('flag')} src={images.vnFlag} alt="VnFlag" />
                        <span className={cx('region')}>Viet Nam</span>
                        <span className={cx('region-symbol')}>($)</span>
                    </div>
                    <div className={cx('search')}>search..</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMid;
