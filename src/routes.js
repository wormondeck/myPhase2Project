import App from './App';
import Home from './Home';
import CarInfo from './CarInfo';
import ErrorPage from './ErrorPage';
import About from './About';
import Contact from './Contact';

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
      }
    ]
  },
  {
    path: "/about", // About route
    element: <About />
  },
  {
    path: "/contact", // Contact route
    element: <Contact />
  }  
];

export default routes;