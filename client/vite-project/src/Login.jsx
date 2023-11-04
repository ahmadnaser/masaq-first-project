import React, { useContext } from "react";
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
import UserContext from "./UserContext";


const Login = () => {

    const userContext = useContext(UserContext);

    const [values, setValues] = React.useState({
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
    
      const login = (event) => {
event.preventDefault();
console.log(values)

axios.post('http://localhost:8080/api/auth',{
    email:values.email,
    password:values.password
}).then(function(response){

    if (response.status === 200) {
        let _user = {
            email:values.email,
            token:response.data.token
        }
        localStorage.setItem("user", JSON.stringify(_user));
        userContext.setUser({isAuthenticated:true})
        setValues({...values,isLoggedin:true})
    }

}).catch((err)=>{
    console.log(err)
})



      }


return     <form method="post" onSubmit={login}>
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

}

export default Login;