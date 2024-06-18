import React from 'react';
import { NavBar } from './NavBar';
import '../../css/header.css'; // Import the CSS for the header

export const Header = () => {
    return (
        <header className="header">
            <NavBar />
        </header>
    )
}