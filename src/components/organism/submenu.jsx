import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FilterBlock from '../molecules/filter_block'
// import { ThemeSwitcher } from '../atoms/theme';


function Submenu({ themecolor }) {
  // const { theme } = useContext(ThemeSwitcher);




  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ color: 'black', background: themecolor, boxShadow:'none' }}>
        <Toolbar sx={{ flexGrow: 1 }}>
          <FilterBlock/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Submenu;
