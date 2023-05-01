import './App.css'
import { Container, Text } from '@nextui-org/react'
import PlayButton from './components/PlayButton'
import { useQuestionsStore } from './store/QuizStore'
import Quiz from './components/Quiz'

function App () {
  const questions = useQuestionsStore((state) => state.questions)

  return (
    <main className='main'>
      <Container className='container'>
        <section className='app'>
          <div className='tittle'>
            <Text h1>App</Text>
          </div>
          <div className='content'>
            {
            questions ? <Quiz /> : <PlayButton />

          }
          </div>
        </section>
      </Container>
    </main>
  )
}

export default App
