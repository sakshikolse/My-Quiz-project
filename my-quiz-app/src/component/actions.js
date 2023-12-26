// Action types for setting quiz title and description
export const SET_QUIZ_TITLE = 'SET_QUIZ_TITLE';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';

// Action types for adding a new question and option to the quiz
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_OPTION = 'ADD_OPTION';

// Action type to store fetched quiz titles
export const STORE_QUIZ_TITLES = 'STORE_QUIZ_TITLES';

// Action types to handle selected titles, questions, and options
export const SET_SELECTED_TITLE = 'SET_SELECTED_TITLE';
export const SET_SELECTED_QUESTIONS = 'SET_SELECTED_QUESTIONS';
export const SET_SELECTED_OPTIONS = 'SET_SELECTED_OPTIONS';

// Action type to submit answers
export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';

// Action types for managing quiz data
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_OPTIONS = 'SET_OPTIONS';


// Action types for deleting a quiz title and toggling status (active/inactive)
export const DELETE_QUIZ_TITLE='DELETE_QUIZ_TITLE';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

// Action types for selecting a single option and updating total score
export const SET_SELECTED_OPTION = 'SET_SELECTED_OPTION';
export const UPDATE_TOTAL_SCORE = 'UPDATE_TOTAL_SCORE';

// Action types for managing total questions, moving to the next question, and setting scores
export const SET_TOTAL_QUESTIONS ='SET_TOTAL_QUESTIONS';
export const  NEXT_QUESTION ='NEXT_QUESTION';
export const SET_SCORE = 'SET_SCORE';
export const SET_QUIZ_OPTIONS = 'SET_QUIZ_OPTIONS';

// Action type for removing an option from a question
export const REMOVE_OPTION = 'REMOVE_OPTION';
export const MARK_CORRECT_OPTION = 'MARK_CORRECT_OPTION';

// Action creators for marking an option as correct or removing an option
export const markCorrectOption = (questionId, optionId) => {
  return {
    type: MARK_CORRECT_OPTION,
    payload: { questionId, optionId },
  };
};
// Action type constants
export const actionTypes = {
  SET_QUESTIONS: 'SET_QUESTIONS',
  
};




export const removeOption = (id) => ({
  type: REMOVE_OPTION,
  payload: id,
});

// Action creators for handling quiz titles and questions
export const storeQuizTitles = (titles) => ({
  type: STORE_QUIZ_TITLES,
  payload: titles,
});

// Action creators for adding questions, setting description, title, and options
export const setSavedTitles = (titles) => ({
  type: 'SET_SAVED_TITLES',
  payload: titles,
});



export const setDescription = (description) => {
  return {
    type: 'SET_DESCRIPTION',
    payload: description,
  };
};

export const addQuestion = (question) => {
  return {
    type: 'ADD_QUESTION',
    payload: question,
  };
};

export const setQuizTitle = (title) => {
  return {
    type: 'SET_QUIZ_TITLE',
    payload: title,
  };
};

export const addOption = (option) => {
  return {
    type: 'ADD_OPTION',
    payload: option,
  };
};

export const setQuestions = (questions) => {
  return {
    type: SET_QUESTIONS,
    payload: questions
  };
};

// action creators for managing quiz data, scores, and related functionalities
export const addQuiz = (title) => ({
  type: 'ADD_QUIZ',
  title,
  createdDate: new Date().toLocaleDateString(),
});

export const toggleStatus = (index) => ({
  type: TOGGLE_STATUS,
  payload: { index },
});

export const submitAnswers = (userAnswers) => {
  return {
    type: SUBMIT_ANSWERS,
    payload: { userAnswers },
  };
};
export const saveCorrectAnswers = (correctAnswers) => {
  return {
    type: 'SAVE_CORRECT_ANSWERS',
    payload: correctAnswers,
  };
};

export const updateTotalScore = (newTotalScore) => {
  return {
    type: 'UPDATE_TOTAL_SCORE',
    payload: newTotalScore,
  };
};
export const setScore = (score) => ({
  type: SET_SCORE,
  payload: score,
});

export const setTotalQuestions = (total) => ({
  type: 'SET_TOTAL_QUESTIONS',
  payload: total,
});

export const nextQuestion = () => ({
  type: 'NEXT_QUESTION',
});
export const setSelectedOption = (option) => {
  return { type: 'SET_SELECTED_OPTION', payload: option };
};

export const setCorrectAnswer = (questionIndex, optionId) => ({
  type: 'SET_CORRECT_ANSWER',
  payload: { questionIndex, optionId },
});

export const setSelectedQuestions = (questions) => ({
  type: SET_SELECTED_QUESTIONS,
  payload: questions,
});

export const setSelectedOptions = (options) => ({
  type: SET_SELECTED_OPTIONS,
  payload: options,
});

export const setShowNextButton = (show) => ({
  type: 'SET_SHOW_NEXT_BUTTON',
  payload: show,
});
export const setCurrentQuestionIndex = (index) => ({
  type: 'SET_CURRENT_QUESTION_INDEX',
  payload: index,
});



const allActions = {
  setDescription,
  addQuestion,
  addOption,
  setSelectedQuestions,
  setSelectedOptions,
  setScore,
};

export default allActions;