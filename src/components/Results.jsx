import { Button } from '@nextui-org/react'
import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionsStore } from '../store/QuizStore'
import './Results.css'
const Results = () => {
  const { correct, incorrect } = useQuestionsData()
  const reset = useQuestionsStore(state => state.reset)
  return (
    <div className='results'>
      <h1>¡Your results!</h1>
      <strong>
        <p>✔ {correct} corrects answers</p>
        <p>❌ {incorrect} incorrects answers</p>
      </strong>
      <div className='results'>
        <Button onPress={() => reset()} shadow color='gradient'>
          ¡Play again!
        </Button>
      </div>
    </div>
  )
}

export default Results
