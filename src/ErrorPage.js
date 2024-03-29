import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <>
          <main>
            <h1>Whoops! Check engine light On, something went wrong!</h1>
          </main>
        </>
    );
}

export default ErrorPage;