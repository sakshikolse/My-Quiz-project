import quizcom from './quizcom.png'; // Importing image
import { useState } from 'react';// Importing React
// Importing components from Material-UI
import { Card, CardContent, CardMedia, Divider, Grid, Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';// Importing useLocation from react-router-dom


// Styling for the image
const iconStyle = {
  height: '60px',
  width: '60px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const Quiz = () => {
  const location = useLocation();  // Get location and state from React Router
  const { state } = location;
   // Extracting necessary data from location state or setting defaults
  const questions = state?.questions || [];// Retrieve questions from state or set an empty array if undefined
  const totalQuestions = questions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(totalQuestions).fill(''));// Initializing array for selected options
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { playerName } = state || {};

 // Handler for selecting an option for a question
  const handleOptionChange = (event) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = event.target.value;
    setSelectedOptions(updatedOptions);
  };

  // Handler for moving to the next question or completing the quiz
  const handleNext = () => {
    if (selectedOptions[currentQuestionIndex] !== '') {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    } else {
      alert('Please select an option before moving to the next question.');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8} lg={6}>
        <Card style={{ width: '60%', margin: '20px auto' }}>
          <CardContent>
               {/* Conditionally render based on quiz completion */}
            {!quizCompleted && (
              <div style={{ textAlign: 'center' }}>
                <h3>{state?.title}</h3>
                <Divider />
                <div style={{ margin: '3px', textAlign: 'left' }}>
                  <h4>Q.{currentQuestionIndex + 1}: {questions[currentQuestionIndex]?.text}</h4>
                </div>
                <FormControl component="fieldset" fullWidth>
                  <RadioGroup>
                     {/* Map through options for the current question */}
                    {questions[currentQuestionIndex]?.options.map((option, index) => (
                      <Box key={index} bgcolor="#c0c0c0" p={1} mb={1} borderRadius={4} style={{ margin: '3px', textAlign: 'left' }}>
                        <FormControlLabel
                          value={option.text}
                          control={<Radio />}
                          label={option.text}
                          onChange={handleOptionChange}
                        />
                      </Box>
                    ))}
                  </RadioGroup>
                </FormControl>
                <Grid item xs={12} sm={6} style={{ textAlign: 'left' }}>
                  <p>Questions: {currentQuestionIndex + 1}/{totalQuestions}</p>
                </Grid>
                <Grid item xs={12} container justifyContent="flex-end">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next Question'}
                  </Button>
                </Grid>
              </div>
            )}
              {/* Display completion message when the quiz is completed */}
            {quizCompleted && (
              <Box border={1} borderColor="black" p={2} textAlign="center">
                <Typography variant="h6">Congratulations  {playerName}! Your Quiz completed</Typography>
                <CardMedia
                  component="img"
                  alt="Image"
                  style={iconStyle}
                  image={quizcom}
                />
                <h4>you've Scored: {currentQuestionIndex + 1}/{totalQuestions}</h4>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Quiz;