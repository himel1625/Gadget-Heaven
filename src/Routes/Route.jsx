import { createBrowserRouter } from 'react-router-dom';


import ProductCard from '../Components/ProductCard';
import MainLayout from '../MainLayout/MainLayout';
import CardDetails from '../pages/CardDetails';
import Dashboard from '../pages/Dashboard';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Statistics from '../pages/Statistics';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../category.json'),
        children: [
          {
            path: '/',
            element: <ProductCard />,
            loader: () => fetch('../products.json'),
          },
          {
            path: '/ProductCard/:category',
            element: <ProductCard />,
            loader: () => fetch('../products.json'),
          },
          {
            path: '/CardDetails/:product_id',
            element: <CardDetails />,
            loader: () => fetch('../products.json'),
          },
        ],
      },
      {
        path: '/Statistics',
        element: <Statistics />,
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
    ],
  },
]);

export { Route };
