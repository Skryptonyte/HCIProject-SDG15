import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Menu, MenuItem, CssBaseline } from '@mui/material';
import MapPage from './pages/MapPage'
import SearchPage from './pages/SearchPage'
import NewsPage from './pages/NewsPage'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contrast, DarkMode, Person, Settings, SettingsAccessibility } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "@fontsource/dancing-script"
import "@fontsource/rubik"

const App = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [dark, setDark] = React.useState(false);

  const handleOpenMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseMenu = (event) => {
    setAnchorElUser(null);
  };
  
  const theme = createTheme({
    palette: {
      mode: dark ? 'dark': 'light',
    },
    typography: {
      fontFamily: 'Rubik',
    }
  });
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
<AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" fontFamily="Dancing Script" fontSize={30} component="div">
      PoachThePoachers
    </Typography>
    <Box sx={{flexGrow: 1}}>
    <Button color="inherit" href="/news">News</Button>
    <Button color="inherit" href="/map">Map</Button>
    <Button color="inherit" href="/search" sx={{flexGrow: 1}}>Blacklist</Button>
    </Box>
      <Box>
        <IconButton
                  size="large"
                  color="inherit"
                  onClick = {handleOpenMenu}
                >
                  <Settings/>
        </IconButton>
        <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseMenu}
            >

                <MenuItem onClick={()=>{dark ? setDark(false): setDark(true)}}>
                  <DarkMode sx={{flexGrow: 1}}/>
                  <Typography textAlign="center">Set Dark Mode: {dark ? 'On': 'Off'}</Typography>
                </MenuItem>
            </Menu>
      </Box>
  </Toolbar>
</AppBar>

<BrowserRouter>
      <Routes>
          <Route path="/map" element={<MapPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/news" element={<NewsPage />} />
      </Routes>
   </BrowserRouter>
   </ThemeProvider> 
  </>
  );
};

export default App;
