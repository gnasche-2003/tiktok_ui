import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img className={cx('avatar')} src="https://avatars.githubusercontent.com/u/94531143?v=4" alt="Gnasche" />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>Gnasche</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Gnasche_2003</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
