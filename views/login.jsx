import React from 'react';
import Nav from './components/Nav'
import DefaultLayout from './layout/default'


const Login = (props) => {
    return (
        <DefaultLayout title="Login">
            <Nav/>
            <main class="form-signin">
  <form action="/user/login" method='post' encType="multipart/form-data">
 <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

    <div class="form-floating">
      <input type="email" name="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" name="password" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2023</p>
  </form>
</main>
        </DefaultLayout>
    )
}

module.exports = Login;