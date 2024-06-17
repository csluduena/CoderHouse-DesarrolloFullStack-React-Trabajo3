import React from 'react'
import { NavBar } from './NavBar'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <header className="header">
            <NavBar />
        </header>
    )
}
