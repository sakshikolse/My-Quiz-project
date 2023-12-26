import './App.css';
import React from 'react';
import Navlink from './component/Navlink';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import CreateNewQuiz from './component/CreateNewQuiz';
import MCQForm from './component/MCQForm';
import MyQuizzes from './component/MyQuizzes';
import PlayQuiz from './component/PlayQuiz';
import Quiz from './component/Quiz';

function App() {
  return (
    <div className="App">
      <Navlink />
      <Routes>
      <Route path="/PlayQuiz" element={<PlayQuiz />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/MyQuizzes" element={<MyQuizzes />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CreateNewQuiz" element={<CreateNewQuiz />} />
        <Route path="/MCQ(SingleCorrect)" element={<MCQForm />} />
        <Route path="/MCQForm" element={<MCQForm />} />
        <Route path="/" element={<Home />} />
       </Routes>
        </div>
  );
}
export default App;