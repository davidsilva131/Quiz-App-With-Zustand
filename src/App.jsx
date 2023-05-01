import './App.css'
import { Container, Text } from '@nextui-org/react'
import PlayButton from './components/PlayButton'

function App () {
  return (
    <main className='main'>
      <Container className='container'>
        <section className='app'>
          <div className='tittle'>
            <Text h1>App</Text>
          </div>
          <div className='content'>
            <PlayButton />
          </div>
        </section>
      </Container>
    </main>
  )
}

export default App
