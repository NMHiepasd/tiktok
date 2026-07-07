import classNames from 'classnames/bind';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Following.module.scss';
import VideoCard from '~/components/VideoCard';
import { videos } from '~/mock/data';

const cx = classNames.bind(styles);

// Giả lập: chỉ hiển thị video của những tài khoản đã follow (id chẵn)
const followingVideos = videos.filter((video) => video.user.id % 2 === 0);

function Following() {
    return (
        <div className={cx('wrapper')}>
            {followingVideos.length > 0 ? (
                followingVideos.map((video) => <VideoCard key={video.id} data={video} />)
            ) : (
                <div className={cx('empty')}>
                    <FontAwesomeIcon className={cx('empty-icon')} icon={faUserGroup} />
                    <h3>Chưa follow ai cả</h3>
                    <p>Video từ những tài khoản bạn follow sẽ xuất hiện ở đây.</p>
                </div>
            )}
        </div>
    );
}

export default Following;
