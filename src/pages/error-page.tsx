import { useRouteError, isRouteErrorResponse } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {isRouteErrorResponse(error)
                        ? error.statusText
                        : (error as RouteError).message}
                </i>
            </p>
        </div>
    );
}