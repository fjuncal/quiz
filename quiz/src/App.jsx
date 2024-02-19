/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react';
import './App.css'
import Welcome from './components/Welcome'
import { QuizContext } from './context/quiz';
import Question from './components/Question';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  //executa uma vez quando a aplicação é inicada
  useEffect( () => {
    dispatch({type: "REORDER_QUESTIONS"})
  }, [])

  return (
    <>
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}

    </div>
    </>
  )
}

export default App
