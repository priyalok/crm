import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Typography } from '@mui/material'; // Importing Material-UI components

const Navigation = () => {
  const [navigationData, setNavigationData] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:9000/api/navigationdata')
      .then((response) => {
        console.log('Data received:', response.data);
        setNavigationData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleIconClick = (iconUrl) => {
    setSelectedIcon(iconUrl);
  };

  const handleMouseEnter = (iconUrl) => {
    setHoveredIcon(iconUrl);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <div style={{ width: 'fit-content', textAlign: 'center', margin:'auto' }}>
      {navigationData.map((navigationItem, index) => (
        <div key={index} style={{ display: 'block', textAlign: 'center', gap: '50px',marginTop:'50px'}}>
          <Avatar
            key={index}
            src={navigationItem.iconUrl} // Adjust URL here
            alt='icon'
            onClick={() => handleIconClick(navigationItem.iconUrl)}
            onMouseEnter={() => handleMouseEnter(navigationItem.iconUrl)}
            onMouseLeave={handleMouseLeave}
            sx={{
              width: 30,
              height: 30,
              cursor: 'pointer',
              borderRadius: '0',
              margin:'10px',
              filter: selectedIcon === navigationItem.iconUrl || hoveredIcon === navigationItem.iconUrl ? 'brightness(80%)' : 'none' // Reduce brightness when selected or hovered
            }} // Set width, height, and cursor using sx prop
          />
          {(selectedIcon === navigationItem.iconUrl || (!selectedIcon && selectedIcon !== null)) && (
            <Typography variant="body2" sx={{color:'#00AEF8'}}>
              {navigationItem.title}
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;