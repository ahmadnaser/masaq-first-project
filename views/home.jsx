import React from "react";
import DefaultLayout from "./layout/default";
import Nav from "./compontents/Nav";
import Footer from "./compontents/Footer";
function Home(props) {
   
  return (
    <DefaultLayout title="Home Page">
      <Nav />

      <main>
        <section className="cats">
          <ul>
            {
               
                props.data.map(pet => (
                    <li key={pet.id}>
                    <img
                      src={pet.image}
                      alt={pet.name}
                    />
                    <h3></h3>
                    <p>
                      <span>Breed: </span>{pet.breed}
                    </p>
                    <p>
                      <span>Description: </span>{pet.description}
                    </p>
                    <ul className="buttons">
                      <li className="btn edit">
                        <a href="">Change Info</a>
                      </li>
                      <li className="btn delete">
                        <a href="">New Home</a>
                      </li>
                    </ul>
                  </li>
                ))
            }

          </ul>
        </section>
      </main>
    </DefaultLayout>
  );
}

module.exports = Home;
