import classNames from 'classnames/bind';
import styles from '../ContactUsPage.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const cx = classNames.bind(styles);

const schema = yup
    .object({
        name: yup.string().required('Required!').min(12, 'Minimum 12 characters').max(30, 'Maximum 30 character'),
        email: yup.string().email('Invalid email format').required('Required!'),
        phone: yup.number().positive().integer().min(10, 'Minimum 10 characters').required('"Required!"'),
        enquiry: yup.string(),
    })
    .required();

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const handleContactValidator = (data) => console.log(data);
    const handleError = (errors) => console.error(errors);

    return (
        <div className={cx('wrapper-form')}>
            <div className={cx('inner-form')}>
                <h2 className="title-form">Contact Form</h2>
                <p className={cx('form-desc')}>
                    Alternatively please complete the form below and a member of our team will contact you as soon as
                    possible.
                </p>
                <form onSubmit={handleSubmit(handleContactValidator, handleError)} className={cx('form-contact')}>
                    <div>
                        <label>Full name: </label>
                        <span>
                            {errors.name?.message ? (
                                <>
                                    <input className={cx('border-red')} type="text" name="name" {...register('name')} />
                                    <p>{errors.name?.message}</p>
                                </>
                            ) : (
                                <input type="text" name="name" {...register('name')} />
                            )}
                        </span>
                    </div>
                    <div>
                        <label>EMAIL ADDRESS: </label>
                        <span>
                            {errors.email?.message ? (
                                <>
                                    <input
                                        className={cx('border-red')}
                                        type="email"
                                        name="email"
                                        {...register('email')}
                                    />
                                    <p>{errors.email?.message}</p>
                                </>
                            ) : (
                                <input type="email" name="email" {...register('email')} />
                            )}
                        </span>
                    </div>
                    <div>
                        <label>TELEPHONE: </label>
                        <span>
                            {errors.phone?.message ? (
                                <>
                                    <input
                                        className={cx('border-red')}
                                        type="text"
                                        name="phone"
                                        {...register('phone')}
                                    />
                                    <p>{errors.phone?.message}</p>
                                </>
                            ) : (
                                <input type="text" name="phone" {...register('phone')} />
                            )}
                        </span>
                    </div>
                    <div>
                        <label>YOUR ENQUIRY: </label>
                        <input className={cx('enquiry')} type="text" name="enquiry" {...register('enquiry')} />
                    </div>
                    <div>
                        <button className={cx('submit-btn')} type="submit">
                            SEND YOUR MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
