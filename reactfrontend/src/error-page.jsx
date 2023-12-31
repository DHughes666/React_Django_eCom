import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>404 error, page not found</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}