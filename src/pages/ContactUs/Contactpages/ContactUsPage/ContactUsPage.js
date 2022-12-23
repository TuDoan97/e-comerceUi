import classNames from 'classnames/bind';

import ContactNav from '../../ContactNav';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import styles from './ContactUsPage.module.scss';

const cx = classNames.bind(styles);

function ContactUsPage() {
    return (
        <div className={cx('wrapper')}>
            <ContactNav />

            <div className={cx('inner')}>
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactUsPage;
