import classNames from 'classnames/bind';
import styles from './HeaderMid.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/img';
import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
                        <span className={cx('region')}>vietnam</span>
                        <span className={cx('region-symbol')}>($)</span>
                        <FontAwesomeIcon icon={faChevronDown} className={cx('icon-down')} />
                    </div>
                    <div className={cx('search')}>
                        search..
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMid;
