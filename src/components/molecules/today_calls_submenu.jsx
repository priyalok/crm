import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FullScreen from '../atoms/full_screen';
import Refresh from '../atoms/refresh';
import "../atoms/today_calls_submenu.css";

// import { ThemeSwitcher } from '../atoms/theme';


function TodayCallsSubmenu({ themecolor }) {
  // const { theme } = useContext(ThemeSwitcher);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ color: 'black', background: themecolor, boxShadow:'none' }}>
        <Toolbar sx={{ flexGrow: 1 }}>
          <h1></h1>
       <Refresh/>
       <FullScreen/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TodayCallsSubmenu;
