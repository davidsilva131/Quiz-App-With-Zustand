import React from 'react'
import { useQuestionsStore } from '../store/QuizStore'
import { Button } from '@nextui-org/react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import Question from './Question'
import './Quiz.css'
const Quiz = () => {
  const questions = useQuestionsStore((state) => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)

  const questionInfo = questions[currentQuestion]

  return (
    <section className='quiz'>
      <Button.Group color='gradient' size='xs'>
        <Button onPress={goPreviousQuestion} disabled={currentQuestion === 0}><GoArrowLeft /></Button>
        <Button disabled>{currentQuestion + 1}</Button>
        <Button onPress={goNextQuestion} disabled={currentQuestion >= questions.length - 1}><GoArrowRight /></Button>
      </Button.Group>
      <Question info={questionInfo} />
    </section>
  )
}

export default Quiz
