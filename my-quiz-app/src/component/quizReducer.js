// Importing specific action constants from './actions' file
import {  SET_DESCRIPTION,ADD_QUESTION} from './actions';// Importing SET_DESCRIPTION and ADD_QUESTION constants
import { SET_SELECTED_QUESTIONS } from './actions';// Importing SET_SELECTED_QUESTIONS constant
import {  SET_TOTAL_QUESTIONS } from './actions';// Importing SET_TOTAL_QUESTIONS constant
import {SUBMIT_ANSWERS} from './actions';// Importing SUBMIT_ANSWERS constant
import { ADD_OPTION } from './actions';// Importing ADD_OPTION constant
import { SET_SCORE } from './actions';// Importing SET_SCORE constant
import { SET_QUESTIONS, SET_OPTIONS} from './actions';// Importing SET_QUESTIONS and SET_OPTIONS constants together
import * as actionTypes from './actions';// Importing all constants from './actions' and storing them in the actionTypes object
import { SET_QUIZ_TITLE } from './actions';// Importing SET_QUIZ_TITLE constant
import { STORE_QUIZ_TITLES } from './actions';// Importing STORE_QUIZ_TITLES constant
import { REMOVE_OPTION} from './actions';// Importing REMOVE_OPTION constant
import{MARK_CORRECT_OPTION}from'./actions';



const savedOptions = JSON.parse(localStorage.getItem('options')) || [];// Retrieve savedOptions from localStorage or initialize as an empty array if not found
const initialState = {
  options: savedOptions,// Array containing saved options retrieved from localStorage
 questions:[],// Array to hold quiz questions
  currentQuestionIndex: 0,// Index representing the current question being displayed
  questionsWithOptions: [], // Array to store questions along with their options
   selectedTitle: '',// String representing the selected quiz title
  selectedQuestions: [],// Array containing selected questions for the quiz
  selectedOptions: [],// Array containing selected options for the quiz questions
  correctAnswers: [], // Array to store correct answers for the quiz
  totalScore: 0, // Total score achieved in the quiz
  totalQuestions: 0,// Total number of questions in the quiz
  currentOption: '', // String representing the currently selected option
 description: '', // Description of the quiz
  savedTitles: JSON.parse(localStorage.getItem('quizTitles')) || [],
 // Array containing saved quiz titles retrieved from localStorage
 savedQuizData: {},// Object to hold saved quiz data
 setSelectedOption:'',// String representing the selected option 
  selectedOption: '',// String representing the selected option
  score: 0,// Score achieved in the quiz
  userAnswers: [],// Array to store user's answers for each question
  showNextButton: false, // Boolean representing whether the 'Next' button should be displayed
  storedQuestions: [] ,// Array to store questions retrieved from localStorage
 storedQuizTitles: [], // Array to hold stored quiz titles

 
};

const quizReducer = (state = initialState, action )=>{
  console.log('Reducer Action:', action);
  switch (action.type) {
   
    // Marking an option as correct or incorrect
    case MARK_CORRECT_OPTION:
      const { questionId, optionId } = action.payload;
      const updatedQuestions = state.questions.map((question) => {
        if (question.id === questionId) {
          const updatedOptions = question.options.map((option) => {
            if (option.id === optionId) {
              return { ...option, isCorrect: true }; // Mark the selected option as correct
            }
            return { ...option, isCorrect: false }; // Unmark other options
          });
          return { ...question, options: updatedOptions };
        }
        return question;
      });
      return { ...state, questions: updatedQuestions };
      // Removing an option from the state options array
    case REMOVE_OPTION:
      return {
        ...state,
        options: state.options.filter((option) => option.id !== action.payload),
      };

     // Storing quiz titles in the state
    case STORE_QUIZ_TITLES:
      return {
        ...state,
        quizTitles: action.payload,
      };

      // Setting saved titles in the state
    case 'SET_SAVED_TITLES':
      return {
        ...state,
        savedTitles: action.payload,
      
 
      };

    // Incrementing the current question index in the state
    case 'INCREMENT_QUESTION_INDEX':
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };

    // Setting the current option in the state
    case 'SET_CURRENT_OPTION':
      return {
        ...state,
        currentOption: action.payload,
      };

    // Adding an option to the state options array
    case 'ADD_OPTION':
      const updatedOptions = [...state.options, action.payload];
     
      return {
        ...state,
        options: updatedOptions,
      };
    

 
    // Setting the quiz title in the state
    case SET_QUIZ_TITLE:
      localStorage.setItem('quizTitle', action.payload); 
      return {
        ...state,
        quizTitle: action.payload, 
      };
      case ADD_OPTION:
      return {
        ...state,
        options: [...state.options, action.payload], 
      };
    case 'SET_OPTIONS':
      return {
        ...state,
        options: action.payload,
      };

       // Setting questions in the state
    case actionTypes.SET_QUESTIONS:
      return { ...state, questions: action.payload };

       // Setting options,title in the state
    case actionTypes.SET_OPTIONS:
      return { ...state, options: action.payload };
    case actionTypes.SET_QUIZ_TITLE:
      return { ...state, quizTitle: action.payload };
    case SET_QUESTIONS:
      return { ...state, selectedQuestions: action.payload };
    case SET_OPTIONS:
      return { ...state, selectedOptions: action.payload };
  
    
  
    case 'SAVE_CORRECT_ANSWERS':
      return {
        ...state,
        correctAnswers: action.payload,
      };

    case 'UPDATE_TOTAL_SCORE':
      return {
        ...state,
        totalScore: action.payload,
      };

      // Setting the score in the state
    case SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };

      // Setting the description in the state
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
      
    
      // Adding questions to the state
      case 'ADD_QUESTIONs':
        return {
          ...state,
          storedQuestions: action.payload, 
        };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload,],
        currentQuestionIndex: state.currentQuestionIndex + 1,
        
      };
  
        case action.SET_SELECTED_TITLE:
       return { ...state, selectedTitle: action.payload };
 
      // Handling the selected questions and options in the state
      case SET_SELECTED_QUESTIONS:
        return {
          ...state,
          selectedQuestions: action.payload, 
        };
    
      case 'SET_SCORE':
        return { ...state, score: action.payload };
        
         case 'SET_CORRECT_ANSWER':
            return {
              ...state,
              questions: state.questions.map((question, index) => {
                if (index === action.payload.questionIndex) {
                  return {
                    ...question,
                    options: question.options.map((option) => ({
                      ...option,
                      isCorrect: option.id === action.payload.optionId,
                    })),
                  };
                }
                return question;
              }),
            };
            case 'SET_SHOW_NEXT_BUTTON':
              return {
                ...state,
                showNextButton: action.payload,
              };
         
           case SET_TOTAL_QUESTIONS:
                  return {
                    ...state,
                    totalQuestions: action.payload,
                  };
     
      // Handling the correct answers and calculating the score in the state
      case SUBMIT_ANSWERS:
        const { userAnswers, correctAnswers } = action.payload;
      let score = 0;

      // Calculate score based on correct answers and user's answers
      for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
          score++; 
        }
      }

      return {
        ...state,
        score,

      };
              
       // Handling other actions with default state return 
          default:
            return state;
        }
      }
  
      export default quizReducer; 