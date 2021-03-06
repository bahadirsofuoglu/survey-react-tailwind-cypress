import React from 'react'
import Checkbox from './Checkbox'
function FormContent (props) {
  const { question } = props

  return (
    <div>
      <div className='p-4'>
        <p className='text-3xl text-white font-medium'>{question.question}</p>
      </div>
      {question.answers.map((answer, index) => (
        <Checkbox
          key={`answer-${index}`}
          questionId={question.id}
          changedAnswer={answer}
        />
      ))}
    </div>
  )
}

export default FormContent
