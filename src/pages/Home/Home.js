import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from '~/config';
import images from '~/assets/img';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    const featuredProducts = [
        {
            img: 'https://cdn.ecommercedns.uk/files/8/231138/5/7183255/girls-striped-shirt.jpg',
            productName: 'Black & White Striped Jacket',
            productPrice: '$159.31',
        },
        {
            img: 'https://cdn.ecommercedns.uk/files/8/231138/6/7184526/shoes-black.jpg',
            productName: 'Black Plastic Shoes With Oversized White Platform',
            productPrice: '$147.05',
        },
        {
            img: 'https://cdn.ecommercedns.uk/files/8/231138/4/7182524/dresses-black-striped.jpg',
            productName: 'Black Striped Summer Dress',
            productPrice: '$147.05',
        },
        {
            img: 'https://cdn.ecommercedns.uk/files/8/231138/7/7182387/boys-waistcoat.jpg',
            productName: 'Boys Waistcoat In Black',
            productPrice: '$171.56',
        },
        {
            img: 'https://cdn.ecommercedns.uk/files/8/231138/2/7181862/handbags-grey.jpg',
            productName: 'Grey & Yellow Strapped Handbag',
            productPrice: '$159.31',
        },
        {
            img: 'https://cdn.ecommercedns.uk/files/8/231138/7/7183417/girls-white-red-spotted-dress.jpg',
            productName: 'White Dress With Red Spots',
            productPrice: '$122.53',
        },
        {
            img: 'https://cdn.ecommercedns.uk/files/8/231138/2/7184642/shoes-white-platform.jpg',
            productName: 'White Platforms',
            productPrice: '$171.56',
        },
    ];

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

                {/* launcher */}
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
                <section className={cx('featured-products')}>
                    <h2 className={cx('block-line')}>
                        <span className={cx('title')}>Featured Products</span>
                    </h2>

                    <div className={cx('products')}>
                        <button className={cx('arrow-prev')}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        {/* Product lists */}
                        <div className={cx('products-list')}>
                            {featuredProducts.map((item, index) => (
                                <div className={cx('products-item')} key={index}>
                                    <img src={item.img} alt={item.productName} />
                                    <div className={cx('content')}>
                                        <div className={cx('product-name')}>{item.productName}</div>
                                        <div className={cx('product-price')}>{item.productPrice}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className={cx('arrow-next')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
