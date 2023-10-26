import Root from '../Layouts/Root/Root';
import Home from '../Pages/Home/Home';

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
];

export default routes;
