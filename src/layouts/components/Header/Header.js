import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import {
  HubIcon,
  CoinIcon,
  DarkIcon,
  InboxIcon,
  StudioIcon,
  LogOutIcon,
  MessageIcon,
  ProfileIcon,
  FavoriteIcon,
  KeyboardIcon,
  LanguageIcon,
  SettingsIcon,
  FeedbackAndHelpIcon,
} from '~/components/Icons';

import Search from '../Search/Search';
import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import config from '~/config';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <HubIcon />,
    title: 'LIVE Creator Hub',
    to: '/hub',
  },

  {
    icon: <LanguageIcon />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },

  {
    icon: <FeedbackAndHelpIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },

  {
    icon: <KeyboardIcon />,
    title: 'Keyboard shortcuts',
  },

  {
    icon: <DarkIcon />,
    title: 'Dark mode',
    children: {
      title: 'State Mode',
      data: [
        {
          type: 'state',
          code: 'auto',
          title: 'Use device theme',
        },
        {
          type: 'state',
          code: 'dark',
          title: 'Dark mode',
        },
        {
          type: 'state',
          code: 'white',
          title: 'White mode',
        },
      ],
    },
  },
];

function Header() {
  const currentUser = true;

  // Handle Logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // Handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <ProfileIcon />,
      title: 'View profile',
      to: '/profile',
    },

    {
      icon: <FavoriteIcon />,
      title: 'Favorites',
      to: '/favorites',
    },

    {
      icon: <CoinIcon />,
      title: 'Get Coins',
      to: '/coins',
    },

    {
      icon: <StudioIcon />,
      title: 'LIVE Studio',
      to: '/studio',
    },

    ...MENU_ITEMS,

    {
      icon: <SettingsIcon />,
      title: 'Settings',
      to: '/settings',
    },

    {
      icon: <LogOutIcon />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('wrapper-logo')}>
          <Link to={config.routes.home} className={cx('logo-link')}>
            <img src={images.logo} alt="Logo" />
          </Link>
        </div>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button text leftIcon={<FontAwesomeIcon className={cx('add')} icon={faAdd} />}>
                Upload
              </Button>

              <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                <button className={cx('actions-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 40]} content="Inbox" placement="bottom">
                <button className={cx('actions-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text leftIcon={<FontAwesomeIcon className={cx('add')} icon={faAdd} />}>
                Upload
              </Button>

              <Button primary>Log In</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://avatars.githubusercontent.com/u/94531143?v=4"
                alt="Gnasche"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
