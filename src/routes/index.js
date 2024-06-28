// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Public Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/search', component: Search, layout: null },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
