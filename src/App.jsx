import React from 'react';
import './App.css';
import { useHistory } from "react-router-dom";
import Todo from './components/Todo';
import { Route, Switch } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';

// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


import { styled } from '@mui/material/styles';





const Div = styled('div')(({ theme }) => ({

  [theme.breakpoints.down('600')]: {
    display: "block"
  },
  [theme.breakpoints.up('600')]: {
    backgroundColor: "green",
    display: "none",
  },



}));

const Boxiv = styled('div')(({ theme }) => ({

  [theme.breakpoints.down('600')]: {
    display: "none"
  },
  [theme.breakpoints.up('600')]: {
    display: "block",
  },
}));


function App() {
  let history = useHistory();

  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  function home() {
    history.push("/")
   };

  function about() {
   history.push("/about")
  };
  function contact() {
    history.push("/contact")
   };
   
  return (
    <>




      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Boxiv>
              <Button onClick={() => { history.push("/") }} color="inherit">HOME</Button>
              <Button onClick={() => { history.push("/contact") }} color="inherit">CONTACT</Button>
              <Button onClick={() => { history.push("/about") }} color="inherit">ABOUT</Button>
            </Boxiv>

           
            <Div> <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          

          <PopupState style={{Color:"blue"}} variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <MenuIcon variant="contained" {...bindTrigger(popupState)}> </MenuIcon >
          <Menu  {...bindMenu(popupState)}>
            <MenuItem style={{color:"white", backgroundColor:"blue", width:"100vh"}} onClick={home} >HOME</MenuItem>
            <MenuItem style={{color:"white", backgroundColor:"blue", width:"100vh"}} onClick={contact} >CONTACT</MenuItem>
            <MenuItem style={{color:"white", backgroundColor:"blue", width:"100vh"}} onClick={about}  >ABOUT</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
            
          </IconButton></Div>
         
          </Toolbar>
        </AppBar>
      </Box>








      <Switch>
        <Route exact path="/"> <Todo /></Route>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/contact"><Contact /></Route>
      </Switch>


    </>
  );
}

export default App;
