import './App.css'
import { Container, Text } from '@nextui-org/react'
import PlayButton from './components/PlayButton'
import { useQuestionsStore } from './store/QuizStore'
import Quiz from './components/Quiz'
import { useQuestionsData } from './hooks/useQuestionsData'
import Results from './components/Results'

function App () {
  const questions = useQuestionsStore((state) => state.questions)
  const { unanswered } = useQuestionsData()
  return (
    <main className='main'>
      <Container className='container'>
        <section className='app'>
          <div className='tittle'>
            <Text h1>Quiz App</Text>
          </div>
          <div className='content'>
            {questions.length === 0 && <PlayButton />}
            {questions.length > 0 && unanswered > 0 && <Quiz />}
            {questions.length > 0 && unanswered === 0 && <Results />}
          </div>
        </section>
      </Container>
    </main>
  )
}

export default App
