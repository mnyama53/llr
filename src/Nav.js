import React from "react";

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li><a href="/Home">Home</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/Order">Order Online</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Contact">Contact</a></li>
            </ul>
        </nav>
    )
};

export default Nav;