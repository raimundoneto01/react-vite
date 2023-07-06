
import { useEffect, useState } from 'react'
import './App.css'
import Props from './components/Props/Props'

function App() {
  const [container, setContainer] = useState('')

  const meuBotao = (number) => {
    const text = `Opa, meu BOTÃO ${number} foi Ativado`
    setContainer(text)
    //alert(text)
  }

  

  return (
    <>
      <h1>Usando uma funcão Via Props</h1>
      <Props evento={() => meuBotao(1)} text='Botão-1' />git 
      <Props evento={() => meuBotao(2)} text='Botão-2' />
      <Props evento={() => meuBotao(3)} text='Botão-3' />
      <div>
        {container}
      </div>
    </>
  )
}

export default App
