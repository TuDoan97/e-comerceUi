import classNames from 'classnames/bind';

import ContactNav from '../../ContactNav';
import styles from './DeliveryInformation.module.scss';

const cx = classNames.bind(styles);

function DeliveryInformation() {
    return (
        <div className={cx('wrapper')}>
            <ContactNav />

            <div className={cx('inner')}>
                <h2 className={cx('title')}>DELIVERY INFORMATION</h2>
                <p className={cx('content')}>Here is where you will place information about your delivery policy.</p>

                <p className={cx('content')}>
                    A clear, concise and easy to understand delivery policy is an essential part of a successful store.
                    It helps to inspire confidence in your store.
                </p>

                <p className={cx('content')}>
                    <span>Did you know?</span>
                </p>

                <p className={cx('content')}>
                    A recent study showed that customers are 67% more likely to purchase items from a shop that offers
                    free delivery. and will save you having to send the same answers to the same questions manually.
                </p>

                <p className={cx('content')}>
                    A recent study showed that if a customer does abandon their shopping basket (i.e. doesn't follow
                    through with a purchase) that 55% of the time its because of hidden charges they weren't aware of -
                    like delivery pricing.
                </p>
            </div>
        </div>
    );
}

export default DeliveryInformation;
