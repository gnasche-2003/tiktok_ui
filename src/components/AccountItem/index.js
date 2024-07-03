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
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cb8e03dd47a6ee9f28085036970fc91e.jpeg?lk3s=a5d48078&nonce=10504&refresh_token=6016624af7f947fcf755b05f0cf0d454&x-expires=1720166400&x-signature=vtXRLLoh8dnK1U4%2FGAhutK0MwpE%3D&shp=a5d48078&shcp=b59d6b55"
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
