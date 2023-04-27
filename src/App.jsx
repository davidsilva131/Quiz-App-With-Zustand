import './App.css'
import { Container, Text, Button } from '@nextui-org/react'

function App () {
  return (
    <main className='main'>
      <Container className='container'>
        <section className='app'>
          <section className='tittle'>
            <Text h1>App</Text>
          </section>
          <section className='content'>
            <Button shadow color='gradient'>
              Play
            </Button>
          </section>
        </section>
      </Container>
    </main>
  )
}

export default App
