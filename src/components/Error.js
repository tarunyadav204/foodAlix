import React from 'react';
import { useRouteError, Link } from 'react-router';
const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-page-container">
            <div className="error-content">
                <h1 className="error-code">{err.status}:{err.statusText}</h1>
                <p className="error-message">Oops! The page you are looking for doesn't exist.</p>
                <p className="error-description">
                    We can't seem to find the page you're looking for. It might have been moved or deleted.
                </p>
                <Link to="/" className="home-link">Go Back to Home</Link>

            </div>
        </div>
    );
};

export default ErrorPage;
