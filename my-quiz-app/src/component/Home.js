// Import necessary dependencies from React  and Material-UI
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';// Importing Link from 'react-router-dom' 
import { Card, CardContent , CardActionArea, Typography, CardMedia, Grid } from '@mui/material'; 
import Home1 from './Home1.png'; // Importing card1 image
import Home2 from './Home2.png';// Importing card2 image
import Home3 from './Home3.png';// Importing card3 image

// Create styles using makeStyles from Material-UI
const useStyles = makeStyles({
 card:{
      display: 'flex',
      flexDirection: 'column',
      marginTop:'80px',
      marginLeft: '50px', 
      width: '300px',   
      '@media (max-width: 800px)': {
        flexDirection: 'column-reverse',
        width: '80%',
         

      },
  
 },
 component: {
  padding: '1px',
},
    media: {
      paddingTop: '0.10', 
    },
  }
   
)
// Define the Home component
function Home() {
const classes = useStyles();// Initialize classes using makeStyles

 const cardStyle = {
    margin: '6%', 
    marginLeft:'20px',
  };

  // Return the Home structure
  return (
    <div className={classes.component}>
  {/* Grid container for layout control */}
      <Grid container spacing={1}>
         {/* First card */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card  className={classes.card} style={cardStyle}>
            <CardActionArea>
            <CardContent  style={{ padding: '1px' }}>
                   {/* Link to 'CreateNewQuiz' */}
              <Link to="/CreateNewQuiz" style={{ textDecoration: 'none' }}>
                         <h1 style={{ color: 'black' }}>Create New quiz</h1> 
                          <Typography variant="h6"></Typography>
                           <CardMedia 
                               component="img"
                                 alt="Quiz Image"    
                                    height='160'  
                                    image={Home1}// Image source
                                 />  
                            </Link>
                       </CardContent>
                     </CardActionArea>
                     </Card>
                     </Grid>
        
       
         
         {/* Second card */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.card} style={cardStyle}>
            <CardActionArea>
              <CardContent style={{ padding: '1px' }}>
                   {/* Link to 'MyQuizzes' */}
                <Link to="/MyQuizzes" style={{ textDecoration: 'none' }}>
                  <h1 style={{ color: 'black' }}>MyQuizzes</h1>
                  <Typography variant="h6"></Typography>
                  <CardMedia
                    component="img"
                    alt="Quiz Image"
                    height='160'
                    image={Home2}// Image source
                  />
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>


        {/* Third card */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.card} style={cardStyle}>
            <CardActionArea>
              <CardContent style={{ padding: '1px' }}>
                  {/* Link to 'PlayQuiz' */}
                <Link to="/PlayQuiz" style={{ textDecoration: 'none' }}>
                  <h1 style={{ color: 'black' }}>PlayQuiz</h1>
                  <Typography variant="h6"></Typography>
                  <CardMedia
                    component="img"
                    alt="Quiz Image"
                    height='160'
                    image={Home3}// Image source
                  />
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
</div>
    
  );
}
// Export the Home component
export default Home;