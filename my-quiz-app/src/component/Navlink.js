// Import necessary dependencies from React and Material-UI
import React from 'react';
import { Link } from 'react-router-dom';// Importing Link from 'react-router-dom' 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navlinklogo from './Navlinklogo.png' ;// Importing logo image

// Create styles using makeStyles from Material-UI
const useStyles = makeStyles((theme) => ({
  navLink: {
    textDecoration: 'none',
    color: 'black',
    padding:'10px',
   
  },
  logo: {
   height:'40px',
    width:'80px',
  },
}));

// Define the Navlink component
function Navlink() {
const classes = useStyles();  // Initialize classes using makeStyles
 
 // Custom styling based on breakpoints for responsive design
  const  navLinkStyle=makeStyles((theme) =>({
    [theme.breakpoints.down('sm')]: {
     
      fontSize: '14px',
      color: 'black', 
     
    },
    [theme.breakpoints.up('md')]: {
    
      fontSize: '18px',
  
    }
  }
  )
  );

// Return the navigation bar structure
  return (
       <div >
       <AppBar position="static"  style={{ backgroundColor: 'white' }}>
        <Toolbar>
        {/* Grid container for aligning items */}
      <Grid container spacing={5} justifyContent="flex-start">
      <Grid item>
      {/* Logo */}
      <img
              src={Navlinklogo} // Image source
              alt="Logo"
              className={classes.logo} // Apply logo styling
              />
         </Grid>
         </Grid>
          {/* Grid container for aligning items */}
         <Grid  container spacing={1} justifyContent="flex-end">
         <Grid item>
         {/* Links using Typography component with React Router's Link */}
        <Typography variant="h6" component={Link} to="/Home" className={navLinkStyle.navLink}>
          Home
        </Typography>
      
        <Typography variant="h6" component={Link} to="/" className={classes.navLink}>
         MyQuizzes
        </Typography>
      
        <Typography variant="h6" component={Link} to="/" className={classes.navLink}>
          PlayQuiz
        </Typography>

        </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </div>
  );
}


// Export the Navlink component
export default Navlink;