import { Button } from '@nextui-org/react'
import { getQuiz } from '../services/QuizServices'

const PlayButton = () => {
  const handlePlay = () => {
    getQuiz()
  }
  return (
    <Button onClick={handlePlay} shadow color='gradient'>
      Play
    </Button>
  )
}

export default PlayButton
