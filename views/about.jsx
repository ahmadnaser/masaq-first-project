import React from "react";
import DefaultLayout from './layout/default'
import Nav from './compontents/Nav'
import Footer from './compontents/Footer'
function About(props){
    return (
        <DefaultLayout title="About Page">
            <Nav />
            <h1>This is about page for masaq.it</h1>
            <Footer />
        </DefaultLayout>
    );
}

module.exports = About