import { Button } from '@nextui-org/react'
import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionsStore } from '../store/QuizStore'

const Results = () => {
  const { correct, incorrect } = useQuestionsData()
  const reset = useQuestionsStore(state => state.reset)
  return (
    <div className='results'>
      <h1>¡You results!</h1>
      <strong>
        <p>{correct} corrects</p>
        <p>{incorrect} incorrects</p>
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
