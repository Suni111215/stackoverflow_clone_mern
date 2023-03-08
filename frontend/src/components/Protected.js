import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Protected(props) {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.setItem('login', true);
        if (!login) {
            navigate('/auth')
        }
    })




    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected
