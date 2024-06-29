import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/2b4050c13ce896ca14e110980ba66e4b.jpeg?lk3s=a5d48078&nonce=35473&refresh_token=01da4436e42c18c6bc68aca47f1c8dc0&x-expires=1719802800&x-signature=rG8b2pfhbu6dH2dOfWZSivchmDw%3D&shp=a5d48078&shcp=81f88b70"
        alt="Gnasche"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>gnasche</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>Gnasche2003</span>
      </div>
    </div>
  );
}

export default AccountItem;
