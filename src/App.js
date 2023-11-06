import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Menu, MenuItem, CssBaseline, Divider } from '@mui/material';
import MapPage from './pages/MapPage'
import SearchPage from './pages/SearchPage'
import NewsPage from './pages/NewsPage'
import LoginPage from './pages/LoginPage'
import NewsSinglePage from './pages/NewsSinglePage';
import React from 'react';
import ThanksPage from './pages/ThanksPage'
import IncidentList from './pages/IncidentList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cancel, Contrast, DarkMode, Map, Newspaper, Person, Person2Rounded, Settings, SettingsAccessibility } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "@fontsource/dancing-script"
import "@fontsource/rubik"
import RegisterPage from './pages/RegisterPage';
import { useNavigate } from 'react-router-dom';
import LogoutPage from './pages/LogoutPage';
const App = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [dark, setDark] = React.useState(localStorage.getItem('dark') == "true" ? true: false);

  
  const setDarkMode = () => {
    if (dark){
      localStorage.setItem('dark',"false")
      setDark(false)
    }
    else {
      localStorage.setItem('dark',"true")

      setDark(true)
    }
  }
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
    },
  });
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
<AppBar position="fixed">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" fontFamily="Dancing Script" fontSize={30} component="div" marginRight="20px">
      PoachThePoachers
    </Typography>
    <Box sx={{flexGrow: 1}}>
    <Button color="inherit" href="/news"><Newspaper/> News</Button>
    <Button color="inherit" href="/search" sx={{flexGrow: 1}}><Cancel/>Blacklist</Button>
    <Button color="inherit" href="/map"><Map/>Career</Button>

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

                <MenuItem onClick={setDarkMode}>
                  <DarkMode sx={{flexGrow: 1}}/>
                  <Typography textAlign="center">Set Dark Mode: {dark ? 'On': 'Off'}</Typography>
                </MenuItem>
            </Menu>
            {!localStorage.getItem("login") && <Button color="inherit" href="/login">Login</Button>}
            {localStorage.getItem("login")  && <Button color="inherit"><Person2Rounded/>{localStorage.getItem("login")}</Button>}

            {localStorage.getItem("login")  && <Button color="inherit" href="/logout">Logout</Button>}
      </Box>
  </Toolbar>
</AppBar>
<Toolbar/>
<BrowserRouter>
      <Routes>
          <Route path="/map" element={<MapPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/news/:id" element={<NewsSinglePage />} />
          <Route path="/thanks" element={<ThanksPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/incidents" element={<IncidentList />} />

      </Routes>
   </BrowserRouter>
   </ThemeProvider> 
  </>
  );
};

export default App;
