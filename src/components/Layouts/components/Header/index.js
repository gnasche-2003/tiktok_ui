import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdd,
  faUser,
  faCoins,
  faSpinner,
  faMessage,
  faKeyboard,
  faEarthAsia,
  faPaperPlane,
  faCircleXmark,
  faCircleQuestion,
  faMagnifyingGlass,
  faEllipsisVertical,
  faBookBookmark,
  faVideo,
  faLightbulb,
  faGear,
  faMoon,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
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
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
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
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/profile',
    },

    {
      icon: <FontAwesomeIcon icon={faBookBookmark} />,
      title: 'Favorites',
      to: '/favorites',
    },

    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get Coins',
      to: '/coins',
    },

    {
      icon: <FontAwesomeIcon icon={faVideo} />,
      title: 'LIVE Studio',
      to: '/studio',
    },

    {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: 'LIVE Creator Hub',
      to: '/hub',
    },

    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },

    ...MENU_ITEMS,

    {
      icon: <FontAwesomeIcon icon={faMoon} />,
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

    {
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
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

              <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                <button className={cx('actions-btn')}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx('actions-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
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
              <img
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
