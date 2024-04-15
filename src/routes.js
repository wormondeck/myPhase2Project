import App from './App';
import Home from './Home';
import CarInfo from './CarInfo';
import ErrorPage from './ErrorPage';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/CarInfo/:id",
             element: <CarInfo />
          }
        ]

      },
    ]
  },   
];

export default routes;