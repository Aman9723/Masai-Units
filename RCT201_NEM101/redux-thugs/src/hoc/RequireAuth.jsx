import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
    const isAuth = useSelector((store) => store.auth.isAuth);
    const { pathname } = useLocation();

    if (isAuth) {
        return children;
    } else {
        return (
            // Redirecting to Login page
            <Navigate
                to="/login"
                state={{ from: pathname }}
                replace
                // spacer
            />
        );
    }
};

export default RequireAuth;
