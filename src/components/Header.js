import * as React from 'react';
import { Link } from 'react-router-dom'

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

import '../assets/css/Header.css'
import logoImage from "../assets/image/logo.png"
import { MDBInput } from "mdbreact";
const Header = () => {
   
    return (
        <React.Fragment>
            <Toolbar className="header" sx={{ borderBottom: 1, color: "white" }}>
                <Link to="/products">
                    <Button size="">
                        <Typography color="black">
                            Products
                        </Typography>
                    </Button>
                </Link>

                <MDBInput label="Search" />

                <IconButton >
                    <SearchIcon />
                </IconButton>

                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                >
                    <Link to="/">
                        <img className="header_logo" src={logoImage} />
                    </Link>
                </Typography>

               

                <Link to="/registration">
                    <Button variant="outlined" size="medium" style={{ "marginRight": "1rem" }}>
                        <Typography color="black">
                            Sign up
                        </Typography>
                    </Button>
                </Link>
                
                <Link to="/login">
                    <Button variant="outlined" size="medium">
                        <Typography color="black">
                        Log in
                        </Typography>
                    </Button>
                </Link>
            
            </Toolbar>
        </React.Fragment>

        
    )
}

export default Header
