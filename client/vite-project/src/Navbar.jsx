import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserContext from "./UserContext";
import Link from "@mui/material/Link";
import { Link as Href } from "react-router-dom";



export default function Navbar() {
    const userContext = useContext(UserContext);
    let user = null;
    user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example">
        <Link component="button" variant="body2" sx={{ mx: 3 }}>
              <Href to="/">Home</Href>
            </Link>
            {userContext.user.isAuthenticated ?(<>
            <span>Hello {user.email}</span>
                <Link component="button" variant="body2" sx={{ mx: 3 }}>
              <Href to="/logout">Logout</Href>
            </Link></>):(<> <Link component="button" variant="body2" sx={{ mx: 3 }}>
              <Href to="/account">Login</Href>
            </Link><Link component="button" variant="body2" sx={{ mx: 3 }}>
              <Href to="/register">Register</Href>
            </Link></>)}
            
       

        </Tabs>
      </Box>

    </Box>
  );
}
