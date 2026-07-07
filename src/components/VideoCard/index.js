import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import {
    faCircleCheck,
    faHeart,
    faCommentDots,
    faShareNodes,
    faMusic,
    faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './VideoCard.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function formatCount(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
}

function VideoCard({ data }) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [liked, setLiked] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (playing) {
            video.pause();
        } else {
            video.play();
        }
        setPlaying((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.nickname} />

            <div className={cx('body')}>
                <div className={cx('head')}>
                    <p className={cx('nickname')}>
                        <span>{data.user.nickname}</span>
                        {data.user.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                    </p>
                    <p className={cx('username')}>{data.user.full_name}</p>
                </div>

                <p className={cx('description')}>{data.description}</p>
                <p className={cx('music')}>
                    <FontAwesomeIcon icon={faMusic} /> {data.music}
                </p>

                <div className={cx('video-area')} onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        className={cx('video')}
                        src={data.video_url}
                        poster={data.thumb_url}
                        loop
                        muted
                    />
                    {!playing && (
                        <div className={cx('play-overlay')}>
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    )}
                </div>
            </div>

            <div className={cx('actions')}>
                <button className={cx('action-btn', { active: liked })} onClick={() => setLiked((p) => !p)}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span>{formatCount(data.likes_count + (liked ? 1 : 0))}</span>
                </button>
                <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={faCommentDots} />
                    <span>{formatCount(data.comments_count)}</span>
                </button>
                <button className={cx('action-btn')}>
                    <FontAwesomeIcon icon={faShareNodes} />
                    <span>{formatCount(data.shares_count)}</span>
                </button>
            </div>
        </div>
    );
}

export default VideoCard;
