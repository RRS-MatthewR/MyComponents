import React from 'react';

function Header () { //1. Created the header component to display the Unity logo across the top of the application
    return (
        <header className="main-header">
            <div className="logo">
                <h1>My Components</h1>
            </div>
        </header>
    );
}

export default Header