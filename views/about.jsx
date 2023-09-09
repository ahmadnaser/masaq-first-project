import React from "react";
import DefaultLayout from './layout/default'
import Nav from './compontents/Nav'
function About(props){
    return (
        <DefaultLayout title="About Page">
            <Nav />
            <h1>This is about page for masaq.it</h1>
        </DefaultLayout>
    );
}

module.exports = About