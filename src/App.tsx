import React from 'react';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/quiestions" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
    </div>
  );
}

export default App;
