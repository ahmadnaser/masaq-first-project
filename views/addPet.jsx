import React from "react";
import DefaultLayout from './layout/default'
import Nav from "./components/Nav";
import Footer from './components/Footer'
function AddPet(props){
    return (
        <DefaultLayout title="About Page">
            <Nav />
            {props.message ? (<h1 className="toast">{props.message}</h1>) : (null)}
            <form action="/AddPet" method="post" className="cat-form" encType="multipart/form-data">
            <h2>Add Cat</h2>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" id="name" />
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description"></textarea>
            <label htmlFor="image">Image</label>
            <input name="upload" type="file" id="image" />
            <label htmlFor="group">Breed</label>
            <select name="breed" id="group">
                <option value="Fluffy Cat">Fluffy Cat</option>
				<option value="Fluffy Cat">Fluffy Cat</option>
				<option value="Fluffy Cat">Fluffy Cat</option>
            </select>
            <button type="submit">Add Cat</button>
        </form>
    
        </DefaultLayout>
    );
}

module.exports = AddPet