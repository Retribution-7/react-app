import { createBrowserRouter } from 'react-router';
import { AboutCompanyPage } from '@/pages/AboutCompanyPage';
import { AccountPage } from '@/pages/AccountPage';
import { AdminPage } from '@/pages/AdminPage';
import { AuthPage } from '@/pages/AuthPage';
import { CartPage } from '@/pages/CartPage';
import { FavoritesPage } from '@/pages/FavoritesPage';
import { HomePage } from '@/pages/HomePage';
import { ReviewsPage } from '@/pages/ReviewsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/cart',
    Component: CartPage,
  },
  {
    path: '/auth',
    Component: AuthPage,
  },
  {
    path: '/reviews',
    Component: ReviewsPage,
  },
  {
    path: '/about',
    Component: AboutCompanyPage,
  },
  {
    path: '/favorites',
    Component: FavoritesPage,
  },
  {
    path: '/account',
    Component: AccountPage,
  },
  {
    path: '/admin',
    Component: AdminPage,
  },
]);
