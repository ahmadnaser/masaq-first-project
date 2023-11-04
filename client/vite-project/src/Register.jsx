import React, { useContext } from "react";
import UserContext from "./UserContext";

import "./App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { Navigate } from "react-router-dom";

function App() {

    const userContext = useContext(UserContext);

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
    isLoggedin: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const register = (event) => {
    event.preventDefault();
    //console.log(values)

    axios
      .post("http://localhost:8080/api/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log("user is registered");
          let user = {
            email: values.email,
            token: response.data.token,
          };

          localStorage.setItem("user", JSON.stringify(user));
          userContext.setUser({isAuthenticated:true})
          setValues({ ...values, isLoggedin: true });
        }
        console.log(JSON.stringify(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (values.isLoggedin) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="App">
      <form method="post" onSubmit={register}>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            required
            id="outlined-required-name"
            label="Name"
            defaultValue=""
            value={values.name}
            onChange={handleChange("name")}
            placeholder="Enter your name"
          />{" "}
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <TextField
            required
            id="outlined-required-email"
            label="Email"
            defaultValue=""
            value={values.email}
            onChange={handleChange("email")}
            placeholder="Enter your email"
          />{" "}
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          sx={{ m: 1, width: "25ch", height: "7ch" }}
          variant="contained"
          id="mybutton"
          type={"submit"}
          label="Login"
        >
          {"Login"}
        </Button>
      </form>
    </div>
  );
}

export default App;
