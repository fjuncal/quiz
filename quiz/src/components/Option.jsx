import { useContext } from 'react'
import './Option.css'
import { QuizContext } from '../context/quiz'


// eslint-disable-next-line react/prop-types
function Option({option}) {

    const [quizState, dispatch ] = useContext(QuizContext);

  return (
    <div className='option'>
      <p>{option}</p>
    </div>
  )
}

export default Option
