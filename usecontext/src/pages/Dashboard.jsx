import React from 'react'
import './Dashboard.css'

import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate()

    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        if(logOut()) {
            navigate('/')
        }
    }


    return(
        <div className='dashboard-container'>
            <div className='dasboard-card'>
                <h1 className='dashboard-title'>¡Bienvenido al dashboard!</h1>
                <p className='dasboard-user'>
                    Hola, <span>{ user || 'usuario logueado'}</span>
                </p>
                <button className='dashboard-button' onClick={handleLogOut}>
                    Cerrar sesion
                </button>
            </div>
        </div>
    )
}

export default Dashboard