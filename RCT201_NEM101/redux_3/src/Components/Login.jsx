import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/auth/auth.actions';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <button
            onClick={() => {
                dispatch(login());
                navigate('/');
            }}
        >
            LOGIN
        </button>
    );
}

export default Login;
