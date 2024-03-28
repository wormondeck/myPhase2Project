import NavBar from "./NavBar";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <>
          <header>
            <NavBar />
          </header>
          <main>
            <h1>Whoops! Check engine light, something went wrong!</h1>
          </main>
        </>
    );
}

export default ErrorPage;