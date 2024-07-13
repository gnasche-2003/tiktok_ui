// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import AccountPreview from './AccountPreview/AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
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
      </Tippy>
    </div>
  );
}

// AccountItem.propTypes = {};

export default AccountItem;
