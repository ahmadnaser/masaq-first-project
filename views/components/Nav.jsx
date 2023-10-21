import React from "react";

function Nav(props){
    return (
        <header>
        <nav>
            <ul className="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="">Add Breed</a></li>
                <li><a href="/addpet">Add Cat</a></li>
                <li><a href="/user/login">Login</a></li>
                <li><a href="/user/register">Register</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
        <form action="/search">
            <input type="text" />
            <button type="button">Search</button>
        </form>
    </header>
    );
}

module.exports = Nav