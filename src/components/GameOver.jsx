import './GameOver.css';
//import WellDone from "../img/welldone.svg";
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import AprovadoFoto from "../img/aprovado-foto.jpeg";
import ReprovadoFoto from "../img/reprovado-foto.jpeg";


const GameOver = () => {

  const [quizState, dispatch] = useContext(QuizContext)

  const halfLenghtQuestions = quizState.questions.length / 2;
  console.log(halfLenghtQuestions)

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      {quizState.score >= halfLenghtQuestions ? (
        <div>
          <h4 className='aprovado'>PARABÉNS, VOCÊ FOI APROVADO NO QUIZ DO CASAL!!</h4>
          <p>✨🎉🎈👩‍❤️‍👨</p>
          <img src={AprovadoFoto} alt="Fim do Quiz" />
        </div>
      ): 
        <div>
          <h4 className='reprovado'>INFELIZMENTE, VOCÊ FOI REPROVADO NO QUIZ DO CASAL!!</h4>
          <p>❌📛🤷🏻‍♀️🤷🏻‍♂️</p>
          <img src={ReprovadoFoto} alt="Fim do Quiz" />
        </div>
      }
      {/* <img src={WellDone} alt="Fim do Quiz" /> */}
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>   
    </div>
  )
}

export default GameOver
