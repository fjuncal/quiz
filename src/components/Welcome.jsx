import { useContext } from 'react'
//import Quiz from '../img/quiz.svg'
import './Welcome.css'
import { QuizContext } from '../context/quiz'
import EuNath from '../img/eu-natinha.jpeg'

const Welcome = () => {
    //quizState pego os valores e dispatch altera
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState)

  return (
    <div id='welcome'>
        <h2> Seja bem-vindo </h2>
        <p>Clique no botão abaixo para começar</p>
        <img src={EuNath} alt='Início do Quiz'/>
        <div>
          <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        </div>
    </div>
  )
}

export default Welcome