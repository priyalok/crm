import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';

export default function IconButtonMenu() {
  const [hamburgerData, sethamburgerData] = useState([]);



    useEffect(() => {
        axios.get('http://127.0.0.1:9000/api/headerdata')
            .then((response) => {
                console.log('Data received:', response.data);
                sethamburgerData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    


  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
        sx={{
            marginRight: 2,
          }}
      >
        {hamburgerData && hamburgerData[0] && hamburgerData[0].list && hamburgerData[0].list.length > 0 && (
        <img alt="" src={hamburgerData[0].list[0].list_icon}   style={{ width: '30px', height: 'auto', cursor: 'pointer' }}/>
        )}
      </MenuButton>
      <Menu>
      {hamburgerData && hamburgerData[0] && hamburgerData[0].list && hamburgerData[0].list.length > 0 && (
        <MenuItem>{hamburgerData[0].list[1].label}</MenuItem>
      )}
      {hamburgerData && hamburgerData[0] && hamburgerData[0].list && hamburgerData[0].list.length > 0 && (
        <MenuItem>{hamburgerData[0].list[2].label}</MenuItem>
      )}
      {hamburgerData && hamburgerData[0] && hamburgerData[0].list && hamburgerData[0].list.length > 0 && (
        <MenuItem>{hamburgerData[0].list[3].label}</MenuItem>
      )}
      {hamburgerData && hamburgerData[0] && hamburgerData[0].list && hamburgerData[0].list.length > 0 && (
        <MenuItem>{hamburgerData[0].list[4].label}</MenuItem>
      )}
      {hamburgerData && hamburgerData[0] && hamburgerData[0].list && hamburgerData[0].list.length > 0 && (
        <MenuItem>{hamburgerData[0].list[5].label}</MenuItem>
      )}
      </Menu>
      
    </Dropdown>
  );
}