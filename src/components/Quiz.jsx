import React from 'react'
import { useQuestionsStore } from '../store/QuizStore'

const Quiz = () => {
  const questions = useQuestionsStore((state) => state.questions)
  console.log(questions)
  return (
    <div>Quiz</div>
  )
}

export default Quiz
