import React from "react";

function Nav(props){
    return (
        <header>
           <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/welcome">Welcome</a></li>
                <li><a href="/pets">Pets Json</a></li>
            </ul>
           </nav>
        </header>
    );
}

module.exports = Nav