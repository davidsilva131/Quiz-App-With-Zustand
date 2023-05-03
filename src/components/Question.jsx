import { Button } from '@nextui-org/react'
import './Question.css'
import { useQuestionsStore } from '../store/QuizStore'
/* eslint-disable react/prop-types */

const getBackGroundColor = (info, answer) => {
  const { userSelectedAnswer, correctAnswer } = info
  if (userSelectedAnswer == null) return '$gradient'
  if (answer !== correctAnswer && answer !== userSelectedAnswer) return '$gradient'
  if (answer === correctAnswer) return '$success'
  if (answer === userSelectedAnswer) return '$error'

  return '$gradient'
}
const Question = ({ info }) => {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const createHandleClick = (answer) => {
    selectAnswer(info, answer)
  }
  return (
    <aside className='question'>
      <div className='question__test'>
        <p>{info.question}</p>
      </div>
      <div className='question__answers'>
        {
          info.answers.map((answer, index) => (
            <Button size='md' onPress={() => { info.userSelectedAnswer == null && createHandleClick(answer) }} css={{ borderRadius: 0, width: 350, background: getBackGroundColor(info, answer) }} key={index}>
              <span className='answer'>
                {answer}
              </span>
            </Button>
          ))
        }
      </div>
    </aside>
  )
}

export default Question
