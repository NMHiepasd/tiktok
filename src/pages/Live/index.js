import classNames from 'classnames/bind';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Live.module.scss';
import Image from '~/components/Image';
import { liveRooms } from '~/mock/data';

const cx = classNames.bind(styles);

function formatViewers(num) {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num;
}

function Live() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>LIVE</h1>
            <div className={cx('grid')}>
                {liveRooms.map((room) => (
                    <div key={room.id} className={cx('card')}>
                        <div className={cx('thumb-wrapper')}>
                            <Image className={cx('thumb')} src={room.thumb_url} alt={room.title} />
                            <span className={cx('live-badge')}>
                                <FontAwesomeIcon icon={faCircle} /> LIVE
                            </span>
                            <span className={cx('viewers')}>{formatViewers(room.viewers_count)} người xem</span>
                        </div>
                        <div className={cx('info')}>
                            <Image className={cx('avatar')} src={room.user.avatar} alt={room.user.nickname} />
                            <div>
                                <p className={cx('title')}>{room.title}</p>
                                <p className={cx('nickname')}>{room.user.nickname}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Live;
