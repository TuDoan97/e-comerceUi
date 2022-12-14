import classNames from 'classnames/bind';
import styles from '../Footer.module.scss';

const cx = classNames.bind(styles);

function FooterMid() {
    const payImg = [
        {
            img: 'https://s3-eu-west-1.amazonaws.com/theme-card-logos/card_paypal.png',
            alt: 'paypal',
        },
        {
            img: 'https://s3-eu-west-1.amazonaws.com/theme-card-logos/card_mastercard.png',
            alt: 'mastercard',
        },
        {
            img: 'https://s3-eu-west-1.amazonaws.com/theme-card-logos/card_visa.png',
            alt: 'visa',
        },
        {
            img: 'https://s3-eu-west-1.amazonaws.com/theme-card-logos/card_discover.png',
            alt: 'discover',
        },
        {
            img: 'https://s3-eu-west-1.amazonaws.com/theme-card-logos/card_amex.png',
            alt: 'amex',
        },
        {
            img: 'https://s3-eu-west-1.amazonaws.com/theme-card-logos/card_jcb.png',
            alt: 'jcb',
        },
        {
            img: 'https://s3-eu-west-1.amazonaws.com/theme-card-logos/card_maestro.png',
            alt: 'maestro',
        },
        {
            img: 'https://s3-eu-west-1.amazonaws.com/theme-card-logos/gateway_paypal.png',
            alt: 'gateway-paypal',
        },
    ];
    return (
        <div className={cx('wrapperMid')}>
            <div className={cx('innerMid')}>
                <p className={cx('copy-right')}>
                    This website is Copyright © 2019. All Rights Reserved.
                    <a href="/" className={cx('copyRight-link')}>
                        {' '}
                        Ecommerce Website Design
                    </a>{' '}
                    by Ecommerce Themes
                </p>

                {/* pay img */}
                <ul className={cx('pay-list')}>
                    {payImg.map((item, index) => (
                        <li className={cx('pay-item')} key={index}>
                            <img src={item.img} alt={item.alt} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FooterMid;
