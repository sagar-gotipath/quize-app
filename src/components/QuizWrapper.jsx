import clsx from 'clsx'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import CenterWrapper from './CenterWrapper'
import Certificate from './Certificate'

const banglaNumericValue = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০', '১১', '১২', '১৩', '১৪']

const QuizWrapper = ({ Quizes }) => {
  const [quizIndex, setQuizIndex] = useState(0)
  const [correctAnsIndex, setCorrectAnsIndex] = useState(null)
  const [wrongAnsIndex, setWrongAnsIndex] = useState(null)
  const [isHint, setIsHint] = useState(false)

  // handler function
  const handleCheckAnswer = (ansIndex) => {
    if (Quizes[quizIndex].answers[ansIndex].isCorrect === true) {
      setCorrectAnsIndex(ansIndex)
      setWrongAnsIndex(null)
      setIsHint(false)
      const audio = new Audio('/assets/audio/right_sound.mp3')
      audio.play()
      setTimeout(() => {
        setQuizIndex(quizIndex + 1)
        setCorrectAnsIndex(null)
      }, 1000)
    } else {
      setWrongAnsIndex(ansIndex)
      setIsHint(true)
      const audio = new Audio('/assets/audio/error_sound.mp3')
      audio.play()
    }
  }
  return (
    <CenterWrapper>
      {quizIndex < Quizes.length && (
        <>
          <img src="/assets/images/mujib.png" alt="mujib logo" className="block w-24 mx-auto mb-16" />
          <article className="relative p-8 mb-6 text-center bg-white border rounded-md border-neutral-300">
            <h3 className="text-2xl font-semibold">{Quizes[quizIndex].question}</h3>
            <div className="absolute top-0 px-2 py-1 text-sm text-white -translate-x-1/2 -translate-y-1/2 bg-orange-600 w-36 rounded-2xl inset-x-1/2">
              প্রশ্ন {banglaNumericValue[quizIndex]}/১৪
            </div>
          </article>

          <section className="flex flex-wrap justify-between">
            {Quizes[quizIndex].answers.map((item, index) => {
              return (
                <button
                  className={clsx(
                    ' p-4 rounded-md mb-8  border w-[48%] cursor-pointer text-left font-semibold',
                    index !== wrongAnsIndex && 'border-neutral-300 bg-white',
                    index === wrongAnsIndex && 'border-red-400 bg-red-600/20 custom-animation animate-error-blink',
                    index === correctAnsIndex && 'border-green-400 bg-green-600/20'
                  )}
                  key={index}
                  onClick={() => handleCheckAnswer(index)}
                >
                  {item.text}
                </button>
              )
            })}
          </section>

          <div className="flex items-center justify-center h-7">
            {wrongAnsIndex !== null && (
              <p className="text-xs text-center text-gray-500">
                আপনার উত্তর টি সঠিক নয় | পরবর্তী প্রশ্নে যেতে সঠিক উত্তরটি নির্বাচন করুন{' '}
              </p>
            )}
          </div>
          {isHint && (
            <div className="p-4 my-3 text-sm border border-green-400 rounded-md bg-green-600/20 text-bg-green-600">
              <span className="font-semibold">সঠিক উত্তরের ইঙ্গিতঃ </span> {Quizes[quizIndex].hint}
            </div>
          )}
        </>
      )}

      {quizIndex >= Quizes.length && <Certificate />}
    </CenterWrapper>
  )
}

export default QuizWrapper
