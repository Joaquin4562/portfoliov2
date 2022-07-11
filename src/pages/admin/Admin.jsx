import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

export const Admin = () => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(true);
    useEffect(() => {
        if (isLogged) {
            navigate('login')
        } else {
            navigate('projects')
        }
    }, [isLogged, navigate])
    return (
        <>
            <Outlet />
        </>
    )
}
