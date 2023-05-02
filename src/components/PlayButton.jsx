import { Button } from '@nextui-org/react'
import { useQuestionsStore } from '../store/QuizStore'

const PlayButton = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions)
  const handlePlay = async () => {
    fetchQuestions()
  }
  return (
    <Button onPress={handlePlay} shadow color='gradient'>
      Play
    </Button>
  )
}

export default PlayButton
