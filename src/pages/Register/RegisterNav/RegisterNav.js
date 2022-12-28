import classNames from 'classnames/bind';
import styles from '../Register.module.scss';
import objRegister from '../objRegister';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function RegisterNav() {
    return (
        <div className={cx('wrapperNav')}>
            <div className={cx('inner')}>
                <ul className={cx('nav-list')}>
                    {objRegister.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <li className={cx('nav-item')}>{item.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RegisterNav;
