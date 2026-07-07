import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import AccountItem from '~/components/AccountItem';
import { searchAccounts } from '~/mock/data';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Kết quả tìm kiếm</h2>
            {searchAccounts.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
        </div>
    );
}

export default Search;
