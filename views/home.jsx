import React from "react";
import DefaultLayout from './layout/default'
import Nav from './compontents/Nav'
import Footer from './compontents/Footer'
function Home(props){
    return (
        <DefaultLayout title="Home Page">
            <Nav />
            <h1>Hello Home</h1>
            <Footer />
        </DefaultLayout>
    );
}

module.exports = Home