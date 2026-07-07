import { useState } from 'react';
import classNames from 'classnames/bind';
import {
    faHouse,
    faUserGroup,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Sidebar.module.scss';
import SidebarMenuItem from './SidebarMenuItem';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { accounts } from '~/mock/data';

const cx = classNames.bind(styles);

function Sidebar() {
    const [showAllAccounts, setShowAllAccounts] = useState(false);

    const suggestedAccounts = showAllAccounts ? accounts : accounts.slice(0, 4);

    return (
        <aside className={cx('wrapper')}>
            <nav className={cx('menu')}>
                <SidebarMenuItem
                    to="/"
                    icon={<FontAwesomeIcon icon={faHouse} />}
                    activeIcon={<FontAwesomeIcon icon={faHouse} />}
                    title="Dành cho bạn"
                />
                <SidebarMenuItem
                    to="/following"
                    icon={<FontAwesomeIcon icon={faUserGroup} />}
                    activeIcon={<FontAwesomeIcon icon={faUserGroup} />}
                    title="Đang follow"
                />
                <SidebarMenuItem
                    to="/live"
                    icon={<FontAwesomeIcon icon={faVideo} />}
                    activeIcon={<FontAwesomeIcon icon={faVideo} />}
                    title="LIVE"
                />
            </nav>

            <div className={cx('separator')} />

            <div className={cx('suggested')}>
                <p className={cx('suggested-label')}>Tài khoản được đề xuất</p>
                {suggestedAccounts.map((account) => (
                    <AccountItem key={account.id} data={account} />
                ))}
                <Button text className={cx('see-more-btn')} onClick={() => setShowAllAccounts((prev) => !prev)}>
                    {showAllAccounts ? 'Ẩn bớt' : 'Xem thêm'}
                </Button>
            </div>

            <div className={cx('separator')} />

            <footer className={cx('footer')}>
                <p>Công ty © 2026 TikTok Clone - Khóa học F8</p>
            </footer>
        </aside>
    );
}

export default Sidebar;
