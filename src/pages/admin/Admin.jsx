import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

export const Admin = () => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(true);
    useEffect(() => {
        if (isLogged) {
            navigate('projects')
        } else {
            navigate('login')
        }
    }, [isLogged, navigate])
    return (
        <>
            <Outlet />
        </>
    )
}
