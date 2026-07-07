import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    const content = (
        <>
            <span className={cx('icon')}>{data.icon}</span>
            <span className={cx('title')}>{data.title}</span>
        </>
    );

    const handleClick = () => {
        onClick && onClick(data);
    };

    if (data.to) {
        return (
            <Link to={data.to} className={classes} onClick={handleClick}>
                {content}
            </Link>
        );
    }

    return (
        <button className={classes} onClick={handleClick}>
            {content}
        </button>
    );
}

export default MenuItem;
