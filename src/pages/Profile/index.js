import { useState } from 'react';
import classNames from 'classnames/bind';
import { faCircleCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Profile.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { accounts, videos } from '~/mock/data';

const cx = classNames.bind(styles);

const currentUser = accounts[0];
const userVideos = videos.filter((v) => v.user.id === currentUser.id);

function formatCount(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
}

function Profile() {
    const [following, setFollowing] = useState(false);
    const [tab, setTab] = useState('videos');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={currentUser.avatar} alt={currentUser.nickname} />

                <div className={cx('info')}>
                    <h1 className={cx('nickname')}>
                        {currentUser.nickname}
                        {currentUser.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                    </h1>
                    <p className={cx('fullname')}>{currentUser.full_name}</p>

                    <Button
                        className={cx('follow-btn')}
                        primary={!following}
                        outline={following}
                        onClick={() => setFollowing((prev) => !prev)}
                    >
                        {following ? 'Đang follow' : 'Follow'}
                    </Button>

                    <div className={cx('stats')}>
                        <span>
                            <strong>128</strong> Following
                        </span>
                        <span>
                            <strong>{formatCount(currentUser.followers_count)}</strong> Follower
                        </span>
                        <span>
                            <strong>{formatCount(2100000)}</strong> Lượt thích
                        </span>
                    </div>

                    <p className={cx('bio')}>Chào mừng đến với kênh của tôi ✨ Chia sẻ những khoảnh khắc mỗi ngày.</p>
                </div>
            </div>

            <div className={cx('tabs')}>
                <button
                    className={cx('tab-btn', { active: tab === 'videos' })}
                    onClick={() => setTab('videos')}
                >
                    Video
                </button>
                <button className={cx('tab-btn', { active: tab === 'liked' })} onClick={() => setTab('liked')}>
                    Đã thích
                </button>
            </div>

            <div className={cx('grid')}>
                {tab === 'videos' ? (
                    userVideos.length > 0 ? (
                        userVideos.map((video) => (
                            <div key={video.id} className={cx('video-item')}>
                                <Image className={cx('video-thumb')} src={video.thumb_url} alt={video.description} />
                                <span className={cx('video-views')}>
                                    <FontAwesomeIcon icon={faPlay} /> {formatCount(video.views_count)}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className={cx('empty')}>Chưa có video nào.</p>
                    )
                ) : (
                    <p className={cx('empty')}>Video đã thích là riêng tư.</p>
                )}
            </div>
        </div>
    );
}

export default Profile;
