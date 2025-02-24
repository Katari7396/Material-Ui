import React, { useState } from 'react'
import quizData from './data.json'
// import './quiz.css'

function Quiz() {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [feedback, setFeedback] = useState(null)
    const [quizCompleted, setQuizCompleted] = useState(false)

    const handleAnswer = (answer) => {
        
        if (answer === quizData[questionIndex].correctAnswer) {
            setFeedback(true)
            setSelectedAnswer(answer)
            
        }else {
            setFeedback(false)
        }
    };

    const handleNext = () => {
        const nextQuestionIndex = questionIndex+1;

        if(nextQuestionIndex < quizData.length) {
            setQuestionIndex(nextQuestionIndex)
            setSelectedAnswer('')
            setFeedback(null)
        } else {
            setQuizCompleted(true)
        }
    };

  return (
    <div className='quiz-app'>

        {!quizCompleted ? (
            <div>
                <h2>Quiz App</h2>
                <div className='questions'>
                    <p>{quizData[questionIndex].question}</p>

                    <div className='options'>
                    {quizData[questionIndex].options.map((option,index)=>(
                        <button
                            key={index}
                            className={`quiz-option ${selectedAnswer === option ? "selected" : ""}`}
                            onClick={()=>handleAnswer(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {feedback !== null && (
              <p className={`quiz-feedback ${feedback ? "correct" : "wrong"}`}>
                {feedback ? "Correct!" : "Try Again"}
              </p>
            )}

              {feedback && (
              <button className="next-button" onClick={handleNext}>
                Next Question
              </button>
            )}  
        </div>
        ) : (
        <div>
            <h1>Quiz Completed!</h1>
            <p>You Finished The Quiz!</p>
        </div>
  )}
    </div>
  )
}

export default Quiz
