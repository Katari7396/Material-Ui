// import { Box, Button, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import backgroundImage from './assets/background.jpg';
// import {AccountCircle, LockOutlined} from '@mui/icons-material'

// function Login() {

//   const [username,setUsername] = useState("")
//   const [password,setPassword] = useState("")

//   const handleLogin = () => {
    
//     alert("Logged in successfull")

//     setUsername("")
//     setPassword("")
//   }
//   return (
//     <Box sx={{
//               height:'100vh',
//               backgroundImage:`url(${backgroundImage})`,
//               backgroundSize:'cover',
//               backgroundPosition:'center',
//               display:'flex',
//               alignItems:'center',
//               justifyContent:'center'
//             }}
//     >
//       <Box sx={{
//                 width:'100%',
//                 maxWidth:400,
//                 padding:4,
//                 borderRadius: 3,
//                 backgroundColor: 'lightgray'
//                }}
//       >
//         <Typography variant='h5' sx={{marginBottom:2,textAlign:'center'}}>
//           WELCOME
//         </Typography>
//         <Box sx={{marginBottom:2}}>

//           <TextField

//           label= 'Username'
//           variant='outlined'
//           fullWidth
//           value={username}
//           onChange={(e)=>setUsername(e.target.value)}
//           InputProps={{
//             startAdornment:<AccountCircle sx={{marginRight:1}}/>,
//           }}
//           />
//         </Box>

//         <Box sx={{marginBottom:2}}>

//           <TextField

//           label= 'Password'
//           variant='outlined'
//           fullWidth
//           value={password}
//           onChange={(e)=>setPassword(e.target.value)}
//           InputProps={{
//             startAdornment:<LockOutlined sx={{marginRight:1}}/>,
//           }}
//           />
//         </Box>
//         <Button variant='contained' onClick={handleLogin} color='primary' fullWidth>
//           Login
//         </Button>
//       </Box>
//     </Box>
//   )
// }

// export default Login

import React, { useState } from 'react';
import './quiz.css'

// Example set of questions
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Rome', 'Berlin'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which is the largest ocean on Earth?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    correctAnswer: 'Pacific',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Shakespeare', 'Dickens', 'Hemingway', 'Austen'],
    correctAnswer: 'Shakespeare',
  },
];

function Me() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setFeedback('Correct!');
      setIsNextButtonDisabled(false);
    } else {
      setFeedback('Try Again');
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswer('');
      setFeedback('');
      setIsNextButtonDisabled(true);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-app">
      {!quizCompleted ? (
        <div>
          <h1>Quiz App</h1>
          <div className="question">
            <p>{questions[currentQuestionIndex].question}</p>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  style={{
                    backgroundColor: selectedAnswer === option ? 'lightblue' : '',
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div
            className="feedback"
            style={{ color: feedback === 'Correct!' ? 'green' : 'red' }}
          >
            {feedback}
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={isNextButtonDisabled}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div>
          <h1>Quiz Completed!</h1>
          <p>Congratulations, you've finished the quiz!</p>
        </div>
      )}
    </div>
  );
}

export default Me;
