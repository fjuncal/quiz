import Quiz from '../img/quiz.svg'
import './Welcome.css'
const Welcome = () => {
  return (
    <div id='welcome'>
        <h2> Seja bem-vindo </h2>
        <p>Clique no botão abaixo para começar</p>
        <img src={Quiz} alt='Início do Quiz'/>
        <button>Iniciar</button>
    </div>
  )
}

export default Welcome