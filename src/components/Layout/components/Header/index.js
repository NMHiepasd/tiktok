import { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faCloudArrowUp,
    faEnvelope,
    faGear,
    faCoins,
    faUser,
    faArrowRightFromBracket,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import PopperWrapper from '~/components/Popper/Wrapper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { searchAccounts } from '~/mock/data';

const cx = classNames.bind(styles);

const userMenuItems = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận Coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/settings',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // Giả lập gọi API tìm kiếm
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        const timer = setTimeout(() => {
            setSearchResult(searchAccounts);
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchValue]);

    const handleClearSearch = () => {
        setSearchValue('');
        setSearchResult([]);
    };

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <HeadlessTippy
                    interactive
                    visible={showResult && searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <p className={cx('search-title')}>Tài khoản</p>
                                {searchResult.map((account) => (
                                    <AccountItem key={account.id} data={account} />
                                ))}
                            </PopperWrapper>
                        </div>
                    )}
                    onClickOutside={() => setShowResult(false)}
                >
                    <div className={cx('search')}>
                        <input
                            value={searchValue}
                            placeholder="Tìm kiếm tài khoản và video"
                            spellCheck={false}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && !loading && (
                            <button className={cx('clear-btn')} onClick={handleClearSearch}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faCloudArrowUp} />} to="/upload">
                        Tải lên
                    </Button>
                    <button className={cx('action-btn')} title="Tin nhắn">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>

                    <Menu items={userMenuItems} onChange={handleMenuChange}>
                        <img
                            className={cx('user-avatar')}
                            src="https://i.pravatar.cc/150?img=1"
                            alt="avatar"
                        />
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
