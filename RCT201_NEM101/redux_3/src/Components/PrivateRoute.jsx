import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { isAuthorized } = useSelector((store) => store.authentication);

    if (isAuthorized) {
        return children;
    } else {
        return <Link to="/login">Login</Link>;
    }
}

export default PrivateRoute;
