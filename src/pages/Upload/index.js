import { useState } from 'react';
import classNames from 'classnames/bind';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Upload.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Upload() {
    const [fileName, setFileName] = useState('');
    const [caption, setCaption] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : '');
    };

    const handleSubmit = () => {
        alert(fileName ? `Đã đăng video: ${fileName}` : 'Vui lòng chọn video trước khi đăng.');
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>Tải video lên</h1>
            <p className={cx('sub-heading')}>Đăng video lên tài khoản của bạn</p>

            <label className={cx('upload-box')} htmlFor="video-input">
                <FontAwesomeIcon className={cx('upload-icon')} icon={faCloudArrowUp} />
                <p>{fileName || 'Chọn video để tải lên'}</p>
                <span>MP4 hoặc WebM, tối đa 60 phút</span>
                <input id="video-input" type="file" accept="video/*" hidden onChange={handleFileChange} />
            </label>

            <textarea
                className={cx('caption-input')}
                placeholder="Mô tả video của bạn..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                rows={4}
            />

            <div className={cx('actions')}>
                <Button outline>Hủy</Button>
                <Button primary onClick={handleSubmit}>
                    Đăng
                </Button>
            </div>
        </div>
    );
}

export default Upload;
