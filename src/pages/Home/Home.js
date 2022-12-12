import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from '~/config';
import images from '~/assets/img';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('home-img')}>
                    <Link to={config.routes.womensClothing}>
                        <img className={cx('default-home')} src={images.defaultHome} alt="defaultHome" />
                    </Link>
                    <div className={cx('wrapper-desc')}>
                        <span className={cx('desc')}>The latest ladies and mens fashion and accessories</span>
                    </div>
                </div>

                <div className={cx('welcome-launcher')}>
                    <h2 className={cx('title')}>WELCOME TO LAUNCHER</h2>
                    <p className={cx('desc')}>The very latest in mens, ladies and childrens fashion</p>
                </div>

                {/* GroupNav */}
                <section className={cx('group-nav')}>
                    <Link to={config.routes.children}>
                        <div className={cx('children-nav')}>
                            <img className={cx('children-img')} src={images.children} alt="children" />
                            <h2>children</h2>
                            <span>
                                shop now
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </div>
                    </Link>

                    <Link to={config.routes.shoes}>
                        <div className={cx('children-nav')}>
                            <img className={cx('children-img')} src={images.shoe} alt="shoe" />
                            <h2>shoes</h2>
                            <span>
                                shop now
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </div>
                    </Link>

                    <Link to={config.routes.womensClothing}>
                        <div className={cx('children-nav')}>
                            <img className={cx('children-img')} src={images.womenClothing} alt="womensClothing" />
                            <h2>Womens Clothing</h2>
                            <span>
                                shop now
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </div>
                    </Link>
                </section>

                {/* FEATURED PRODUCTS */}
            </div>
        </div>
    );
}

export default Home;
