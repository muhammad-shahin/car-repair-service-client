import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './Router/Routes';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
