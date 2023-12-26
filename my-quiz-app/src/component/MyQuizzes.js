// Import necessary dependencies from React and Material-UI
import Switch from '@mui/material/Switch';
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { CardContent,Card } from '@mui/material';
const MyQuizzes = () => {

   // State to manage saved titles, confirmation modal, and delete index
  const [savedTitles, setSavedTitles] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
   
   // Fetching stored titles from local storage on component mount
  useEffect(() =>{
    const storedTitles = JSON.parse(localStorage.getItem('quizTitles')) || [];
    setSavedTitles(storedTitles);
  }, []);
 
   // Toggling the status of a quiz title (active/inactive)
  const handleToggleStatus = (index) => {
    const updatedTitles = savedTitles.map((title,i) => {
     if (i === index) {
       return { ...title, isActive: !title.isActive };
      }
      return title;
    });
  
    setSavedTitles(updatedTitles);
    localStorage.setItem('quizTitles', JSON.stringify(updatedTitles));
  };
  
   // Handling delete button click to confirm deletion
  const handleDeleteQuiz = (index) => {
    setDeleteIndex(index);
    setShowConfirmation(true);
  };

   // Confirming deletion of a quiz title
  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      const updatedTitles = savedTitles.filter((_, index) => index !== deleteIndex);
      setSavedTitles(updatedTitles);

      localStorage.setItem('quizTitles', JSON.stringify(updatedTitles));
      setDeleteIndex(null);
    }
    setShowConfirmation(false);
  };

   // Canceling the deletion of a quiz title
  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
       <Grid container spacing={2}>
        <Grid item xs={12}>
      <h1>My Quizzes</h1>
      <Card  style={{ width: '80%', margin: '30px' }}>
      <CardContent>
        {/* Table to display quiz titles with options */}
      <TableContainer>
      <Table sx={{ overflowX: 'auto' }}>
        <TableBody>
        {savedTitles.map((title, index) => (
              <TableRow key={index}>
              <td>{index + 1}</td>
            <td><h3>{title.title}</h3></td>
            <td>{title.createdOn}</td>
             {/* Toggle switch for quiz status (active/inactive) */}
            <td>
            <Grid container direction="column" alignItems="center" spacing={1}>
              <Grid item>
                 <Switch
                  checked={title.isActive}
                onChange={() => handleToggleStatus(index)}
                color="primary"
                      />
                  </Grid>
                    <Grid item>
                      
                     {title.isActive ? 'Active' : 'Inactive'}
                      
                      </Grid>
                     </Grid>
                     </td>
              {/* Delete button for each quiz title */}
                <td>
               <Grid container justifyContent="center">
               <Grid item>
                  <button
                  style={{ padding: '2px  6px', minWidth: '48px' }}
                  onClick={() => handleDeleteQuiz(index)}>Delete
                  </button>
                  </Grid>
                  </Grid>
               </td>
              </TableRow>
            ))}
        </TableBody>
       </Table>
        
     {/* Modal for delete confirmation */}
      <Modal open={showConfirmation} onClose={handleCancelDelete}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%' }}
      >
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Box
            sx={{
              bgcolor: 'white',
              p: 3,
              borderRadius: '4px',
            }}
          >
            <p>Are you sure you want to delete the quiz?</p>
              {/* Confirmation buttons for deletion */}
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" onClick={handleConfirmDelete}>
                  Yes
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleCancelDelete}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Modal>
    </TableContainer>
     </CardContent>
    </Card>
    </Grid>
    </Grid>
    </div>
  );
};
export default MyQuizzes;