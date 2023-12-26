// Import necessary dependencies from React and Material-UI
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  DialogActions,
  Grid,
} from '@mui/material';

const CreateNewQuiz = () => {
  const navigate = useNavigate();  // Initialize navigate function from useNavigate 
  const [open, setOpen] = useState(false);  // State to handle the dialog open and close
  const [selectedOption, setSelectedOption] = useState('');// State to store the selected option

  // Function to open the dialog
  const handleOpen = () => {
    setOpen(true);
  };

   // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

 // Function to handle option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  // Check if the selected option is 'MCQ(Single Correct)' and navigate accordingly
    if (event.target.value === 'MCQ(Single Correct)') {
      navigate('/MCQ(SingleCorrect)');
    }
  };

   // Effect to open the dialog when the component mounts
  useEffect(() => {
    handleOpen();
  }, []);


// Return the CreateNewQuiz structure
  return (
     // Grid container for layout control
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
         {/* Dialog component */}
        <Dialog open={open} onClose={handleClose}>
             {/* Dialog title */}
          <DialogTitle>Select Question Type</DialogTitle>
            {/* Dialog content */}
          <DialogContent>
              {/* Form control */}
            <FormControl component="fieldset">
                 {/* Radio group for options */}
              <RadioGroup
                aria-label="questionType"
                name="questionType"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                   {/* Radio button for 'MCQ(Single Correct)' */}
                <FormControlLabel
                  value="MCQ(Single Correct)"
                  control={<Radio />}
                  label="MCQ(Single Correct)"
                />
              </RadioGroup>
            </FormControl>
          </DialogContent>
            {/* Dialog actions */}
          <DialogActions></DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};
// Export the CreateNewQuiz component
export default CreateNewQuiz;