import Root from '../Layouts/Root/Root';
import Admin from '../Pages/Admin/Admin';
import AdminDashboard from '../Pages/AdminDashboard/AdminDashboard';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyCart from '../Pages/MyCart/MyCart';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/servicesDetails/:serviceId',
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.serviceId}`),
      },
      {
        path: '/checkout/:serviceId',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.serviceId}`),
      },
      {
        path: '/myCart',
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/admin-dashboard',
        element: <AdminDashboard />,
      },
    ],
  },
];

export default routes;
