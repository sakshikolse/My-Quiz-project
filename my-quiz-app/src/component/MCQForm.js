import { useDispatch, useSelector } from 'react-redux';// Redux  for dispatch and state selection
import { setDescription} from './actions';  // Action creators for setting description and adding questions 
import {removeOption} from './actions';// Action creators for adding and removing options
import React,{useState} from 'react';// Importing React
import AddIcon from '@mui/icons-material/Add'; // Material-UI icons
import Button from '@mui/material/Button';// Material-UI button component
import { Box, Typography,IconButton } from '@mui/material';// Material-UI components
import TextField from '@mui/material/TextField';// Material-UI text field component
import { useNavigate } from 'react-router-dom';// React Router's useNavigate hook for navigation
import { setQuizTitle } from './actions';// Action creator for setting quiz title
import DeleteIcon from '@mui/icons-material/Delete';// Material-UI delete icon component
import { FormControlLabel, Checkbox } from '@mui/material'; // Material-UI components for form control
import { Grid,Card,CardContent} from '@mui/material';// Material-UI grid component for layout
import { markCorrectOption } from './actions'; 

const MCQForm = () => {
  // Initialize state variables
  const navigate = useNavigate();// React Router's navigation hook
  const dispatch = useDispatch();// Redux dispatch function
  const quizTitle = useSelector((state) => state.quizTitle);// Selecting quiz title from Redux store
  const description = useSelector((state) => state.description);// Selecting description from Redux store
   const [showModal,setShowModal] = useState(false); 
   const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [options, setOptions] = useState([]);
  const [newOptionText, setNewOptionText] = useState(''); 
 

// Function to save the quiz title to local storage
  const saveQuizTitle = (title) => {
// Logic to store quiz title, questions, and options in local storage
    const existingTitles = JSON.parse(localStorage.getItem('quizTitles')) || [];
    const currentDate = new Date().toLocaleDateString();
    const updatedTitles = [
      ...existingTitles,
      { title: title, questions: questions, options: options,  createdOn:currentDate, isActive: true }
    ];
    localStorage.setItem('quizTitles', JSON.stringify(updatedTitles));
  };

  
 
  //  Handlers for various user interactions like (changes, additions, deletions)
    const handleSave = () => {
    dispatch(setQuizTitle(quizTitle));// Dispatch actions 
    saveQuizTitle(quizTitle);
     navigate(`/PlayQuiz`); // navigate to '/PlayQuiz'
  };
  const handleMarkCorrectAnswer = (questionId,optionId) => {
    dispatch(markCorrectOption(questionId,optionId));  // Dispatch action to mark  correct option
  };
 
  const handleTitleChange = (event) => {
    dispatch(setQuizTitle(event.target.value)); // Dispatch action to set quiz title
  };
 

  const handleDescriptionChange = (e) => {
    dispatch(setDescription(e.target.value));  // Dispatch action to set quiz description
  };

  
  const handleQuestionChange = (e) => {
     setNewQuestionText(e.target.value); // Set the new question text
  };
   
  const handleOptionChange = (e) => {
    setNewOptionText(e.target.value);  // Set the new option text 
  };

  const handleDeleteOption = (id) => {
     dispatch(removeOption(id)); // Dispatch action to remove an option
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length +1,
      text: newQuestionText,
      options: [...options], // Store options only when adding a question
    };
    const updatedQuestions = [...questions, newQuestion];
    setQuestions(updatedQuestions);
    setQuestions([...questions, newQuestion]);
    setCurrentQuestionIndex(updatedQuestions.length);
    // setCurrentQuestionIndex(questions.length);
    setNewQuestionText('');
    setOptions([]); // Reset options for the new question

    const existingQuestions = JSON.parse(localStorage.getItem('storedQuestions')) || [];
    const updatedStoredQuestions = [...existingQuestions, newQuestion];
    localStorage.setItem('storedQuestions', JSON.stringify(updatedStoredQuestions));

    // Display success message
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const handleAddOption = () => {
    const newOption = { id: options.length + 1, text: newOptionText };
    setOptions([...options, newOption]); // Update options when adding an option
    setNewOptionText('');
  };

  return (
       <div>
           {/* Grid item for heading */}
       <Grid item xs={12} md={6}>
         <h1> Create New Quiz</h1> {/* heading */}
        </Grid>
  
      {/* Grid item for heading */}
    <div style={{
      padding: '10px',
      borderRadius: '8px',
      width: '80%',
      marginLeft: '60px',
      maxWidth: '800px',
      margin: 'auto',
        
    }
    }
    >
      <Card>
      <CardContent>
      {/* Border and styling for the form elements */}
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '90%', marginLeft: '10px' }}>
         
      {/* Inputs for Quiz Title and Description */}
      <div>
      <TextField type="text" value={quizTitle} onChange={handleTitleChange} placeholder="Quiz Title" fullWidth/>
      <br />
      <br/>
      <TextField type="text" value={description} onChange={handleDescriptionChange} placeholder="Description" fullWidth/>
       </div>
       </div>
    
      {/* Display the current question index */}
      <div style={{marginRight:'75%'}}> 
      <h4>Question {currentQuestionIndex + 1}</h4>
      </div>
      
       {/* Input field for new question */}
       <TextField type="text" value={newQuestionText} onChange={(e) =>{handleQuestionChange(e)}}placeholder="Enter your question" fullWidth/>
        {/* Display a success message  */}
       {showModal && <p>Questions created successfully!</p>}
       
        {/* Input field for new option */}
       <TextField type="text" value={newOptionText} onChange={(e) =>{handleOptionChange(e)}}placeholder="Enter Option" fullWidth/>
       <div  style={{ display: 'flex', alignItems: 'center' ,gap:'40px'}} >
       </div>
       <div>
       <br/>
     
       <Box display="flex" flexDirection="row" flexWrap="wrap">
          {options.map((option) => (
          <Box key={option.id} flex={1} border={1} borderRadius={4} padding={1} marginRight={2} marginBottom={2}>  
            {/* Display the option text */}
            <Typography>{option.text}</Typography>
             {/* Checkbox to mark as correct option */}
            <FormControlLabel
             control={
              <Checkbox
                checked={option.isCorrect}
                onChange={() => handleMarkCorrectAnswer(option.id)}
              />
            }
            label="Correct Answer"
          />
             {/* Delete icon button */}
            <IconButton aria-label="delete" onClick={() => handleDeleteOption(option.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
           ))}
      </Box>
    </div>  
   
    {/* Button to add a new option */}
     <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddOption}>
        Add Option
      </Button>  
 
    {/* Button to add a new question */}
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleAddQuestion}>
        Add Question
      </Button>
      
    {/* Button to save the form */} 
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSave()} 
      >
        Save
      </Button>
     </CardContent>
      </Card>
      </div>
     </div>
    
  );
};

export default MCQForm;