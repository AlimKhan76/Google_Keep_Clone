import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { NotesDisplay } from './NotesDisplay';
import { TakeNote } from './TakeNote';
import { useNavigate } from "react-router-dom";

export const MainApp = () => {

    // Used for redirecting the page to any other routes 
    const navigate = useNavigate()

    useEffect(() => {
        // If there is not keepUserId in localStorage then we will send the user to login or signup and only after that will he be allowed to use the webapp
        if (!localStorage.getItem("keepUserId")) {
            // We redirect to /login route which leads to login page 
            navigate("/login")
        }
    }, [])

    return (
        // Rendering all the required components of the webappp
        <>
            <Navbar />
            <TakeNote />
            <NotesDisplay />
        </>
    )
}
