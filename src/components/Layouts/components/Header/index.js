import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import HeadlessTippy from '@tippyjs/react/headless';

import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdd,
  faSpinner,
  faCircleXmark,
  faMagnifyingGlass,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Image from '~/components/Image';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';

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

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

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
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // Handle Logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
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
          <img src={images.logo} alt="Logo" />
        </div>
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
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
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6e2ffe753e3fbb9269e79b7dc94f1e04.jpeg?lk3s=a5d48078&nonce=7781&refresh_token=6c6113d4d12448b6c1764b8dd86f8e6a&x-expires=1720270800&x-signature=RLCPuco0bZ3bZ66%2Fe5IulbcJhkk%3D&shp=a5d48078&shcp=81f88b70"
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
