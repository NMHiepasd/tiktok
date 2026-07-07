import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function SidebarMenuItem({ to, icon, activeIcon, title }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })} end>
            {({ isActive }) => (
                <>
                    <span className={cx('menu-icon')}>{isActive ? activeIcon : icon}</span>
                    <span className={cx('menu-title')}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

export default SidebarMenuItem;
