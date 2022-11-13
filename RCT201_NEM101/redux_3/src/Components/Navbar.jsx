import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/auth/auth.actions';

function Navbar() {
    const dispatch = useDispatch();
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                border: '1px solid black',
            }}
        >
            <h2>Navbar</h2>
            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                LOGOUT
            </button>
        </div>
    );
}

export default Navbar;
