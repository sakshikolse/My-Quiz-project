import {useSelector, useDispatch } from 'react-redux';// Importing useSelector and useDispatch hooks from react-redux
import { storeQuizTitles } from './actions'; // Importing storeQuizTitles action
import React, { useEffect,useState } from 'react';// Importing React
import { useNavigate } from 'react-router-dom';// Importing useNavigate  from react-router-dom
import { Grid, Card, CardContent, Typography, TextField, Button  } from '@mui/material';// Importing components from Material-UI

const PlayQuiz = () => {
  const dispatch = useDispatch();// Initializing useDispatch hook from react-redux
  const navigate = useNavigate();// Initializing useNavigate hook from react-router-dom
  const[playerName,setPlayerName]=useState('');
  const storedQuizTitles = useSelector((state) => state.quizTitles) || [];// Accessing quizTitles from Redux store
 
  
  useEffect(() => {
    const existingTitles = JSON.parse(localStorage.getItem('quizTitles')) || [];  // Retrieving quizTitles from localStorage or setting an empty array if null
    dispatch(storeQuizTitles(existingTitles)); // Dispatching action to storeQuizTitles in Redux store
    }, [dispatch]); // Dependency array contains dispatch, ensuring this effect runs only when dispatch changes
  
    const handleNameChange = (event) => {
    setPlayerName(event.target.value);// Setting playerName state with the input value
  };
  // Function to handle clicking on a quiz title to start the quiz
  const handleTitleClick = (title, questions, options) => {
    // Navigating to '/Quiz' with the state containing title, questions, options, and playerName
    navigate('/Quiz', { state: { title, questions, options ,playerName: playerName || "Anonymous" } });
  };

  return (
  
     <div>
     <h1>Play Quiz</h1> {/* Heading */}
      <Card  style={{ width: '80%', margin: '20px auto' }}>
      <CardContent>
      <Typography variant="body1">Enter your name and select the quiz title you want to play</Typography>
        {/* Input field for the player's name */}
      <TextField
        type="text"
        placeholder="Your Name"
        variant="outlined"
        margin="normal"
        value={playerName}// Binding the playerName state to the value of the input field
        onChange={handleNameChange}// Handling changes in the player's name input
      />
       {/* Grid container for displaying quiz titles */}
      <Grid container spacing={2}>
          {/* Mapping through storedQuizTitles array to display each quiz */}
       {storedQuizTitles.map((quiz, index) => ( 
         <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              {/* Card for each quiz */}
            <Card style={{ backgroundColor: 'pink'}}>
              <CardContent>
                 {/* Displaying the title of the quiz */}
                <Typography variant="h5">{quiz.title}</Typography>
                 {/* Button to start the quiz, conditionally hidden based on quiz's isActive property */}
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleTitleClick(quiz.title, quiz.questions, quiz.options)}
                  style={{ visibility: quiz.isActive ? 'visible' : 'hidden', marginTop: '10px',backgroundColor:'white',color:'black'}}
                >
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}          
      </Grid>
      </CardContent>
      </Card>
    </div>
  );
};

export default PlayQuiz;