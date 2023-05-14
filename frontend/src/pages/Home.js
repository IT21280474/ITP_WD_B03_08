import { useEffect } from 'react'
import { Routes ,Route } from 'react-router-dom';
import { useNotificationsContext } from "../hooks/uesNotificationsContext"
import React, { useState } from 'react';

//components
import NotificationDetails from '../components/NotificationDetails'
import NotificationForm from '../components/NotificationForm'
import UpdateForm from '../pages/updateform'
const Home = () => {
    const { notifications, dispatch } = useNotificationsContext()

    useEffect(() => {
        const fetchNotifications = async () => {
            const response = await fetch('/api/notifications')
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_NOTIFICATIONS', payDetails: json })

            }

        }
        fetchNotifications()
    },)

    return (
        
        <div className="home">
            <div className="notifications">
                {notifications && notifications.map((notification) => (
                    <NotificationDetails key={notification._id} notification={notification} />
                ))}
            </div>
            <NotificationForm />
            <Routes>
                <Route path="/update/:id" element={<UpdateForm />} />
            </Routes>
        </div>

    )
}
export default Home