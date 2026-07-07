import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import VideoCard from '~/components/VideoCard';
import { videos } from '~/mock/data';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            {videos.map((video) => (
                <VideoCard key={video.id} data={video} />
            ))}
        </div>
    );
}

export default Home;
