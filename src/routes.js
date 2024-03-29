import App from './App';
import Home from './Home';
import Sales from './Sales';
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
            {
              path: "/sales",
              element: <Sales />,
            },
        ]
      },
];

export default routes;