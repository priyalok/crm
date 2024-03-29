import React from 'react';
import { Typography } from '@mui/material';

const SelectedTextDisplay = ({ selectedTexts }) => {
  return (
    <div>
      {selectedTexts.map((text, index) => (
        <Typography
          key={index}
          variant="body1"
          style={{
            backgroundColor: 'lightblue',
            padding: '8px',
            margin: '4px', // Adjust the margin to create the gap between items
            display: 'inline-block',
          }}
        >
          {text}
        </Typography>
      ))}
    </div>
  );
};

export default SelectedTextDisplay;