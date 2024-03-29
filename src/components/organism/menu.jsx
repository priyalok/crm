import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import AddFeature from "../atoms/add_feature";
import Notification from '../atoms/notification';
import Refresh from '../atoms/refresh';
import Dayin from '../atoms/dayin';
import FullScreen from "../atoms/full_screen";
import SelectedTextDisplay from '../atoms/SelectedTextDisplay'; // Import the component to display selected text

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#D9D9D9',
    height: '65px'
  },
  iconButton: {
    color: 'white',
    padding: theme.spacing(0.1), // Adjust the spacing between icons
    '&:hover': {
      backgroundColor: 'transparent', 
    },
    
  },
  badge: {
    top: '2px', 
    right: '15px', 
  },
}));

const MenuComponent = () => {
  const classes = useStyles();
  const [selectedTexts, setSelectedTexts] = useState([]); // State to store selected texts

  const handleSaveSelectedText = (text) => {
    if (!selectedTexts.includes(text)) {
      setSelectedTexts([...selectedTexts, text]); // Add new selected text
    } else {
      setSelectedTexts(selectedTexts.filter(item => item !== text)); // Remove deselected text
    }
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar} style={{ boxShadow: 'none', borderTopLeftRadius:'10px' }}>
        <Toolbar style={{ boxShadow: 'none' }}>
          <div className={classes.grow}/>
          <SelectedTextDisplay selectedTexts={selectedTexts} /> {/* Display selected texts */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Dayin/>
          </Typography>
          <IconButton className={classes.iconButton}>
            <AddFeature onSaveSelectedText={handleSaveSelectedText} /> {/* Pass the callback */}
          </IconButton>
      
          <IconButton className={classes.iconButton}>
            <Badge badgeContent={18} color="error" classes={{ badge: classes.badge }}>
              <Notification />
            </Badge>
          </IconButton>
          <IconButton className={classes.iconButton}>
            <Refresh />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <FullScreen/>
          </IconButton>
        </Toolbar>
      </AppBar>
     
    </div>
  );
};

export default MenuComponent;