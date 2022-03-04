import React from 'react'

export default function Header() {
    return (
        <nav>
            <div className="logo">BOAT</div>
            <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Register</li>
            </ul>
            <div className="search">
                <i className="fa fa-search"></i>
                <i className="fa fa-shopping-basket"></i>
            </div>
        </nav>
    )
}
