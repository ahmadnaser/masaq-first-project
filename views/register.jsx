import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layout/default'


const Register = (props) => {
    return (
        <DefaultLayout title="Login">
            <Nav/>
            <main class="form-signin">
  <form action="/user/register" method='post' encType="multipart/form-data">
 <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
 <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" name="name" placeholder="Enter your name" />
      <label for="floatingInput">Full Name</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" name="email" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" name="password" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" name="confrimpassword" id="confrimpassword" placeholder="Re-Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2023</p>
  </form>
</main>
        </DefaultLayout>
    )
}

module.exports = Register;