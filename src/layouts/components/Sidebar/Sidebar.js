import config from '~/config';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  HomeActiveIcon,
  ExploreIcon,
  ExploreActiveIcon,
  FollowingIcon,
  FriendsIcon,
  FriendsActiveIcon,
  LiveIcon,
  LiveIconActive,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Explore"
          to={config.routes.explore}
          icon={<ExploreIcon />}
          activeIcon={<ExploreActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<FollowingIcon className={cx('fol-icon')} />}
          activeIcon={<FollowingIcon className={cx('fol-icon')} />}
        />
        <MenuItem
          title="Friends"
          to={config.routes.friends}
          icon={<FriendsIcon />}
          activeIcon={<FriendsActiveIcon />}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconActive />} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
