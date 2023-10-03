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

{((props.cookiesTerms =="ok") ?(null):<>
<div class="wrapper">
        <div class="notice-cookies active-cookies" id="notice-cookies">
            <img src="https://image.flaticon.com/icons/png/512/541/541732.png" alt="" class="img-cookies" />
            <h3 class="title-cookies"> Cookies </h3>
            <p class="paragraph">We use our own and third-party cookies to obtain statistical data on the navigation of our users and improve our services.</p>
            <a class="btn-cookies" href="/setCookies" id="btn-accept-cookies">Agree</a>
            <a class="link" href="/cookies.html">Cookie Notice</a>
        </div>
    </div>
    <div class="notice-cookies-background active-cookies" id="notice-cookies-background"></div>
</>)}
      

    </DefaultLayout>
  );
}

module.exports = Home;
