import Root from '../Layouts/Root/Root';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
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
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
