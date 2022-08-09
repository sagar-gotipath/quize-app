import clsx from 'clsx'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import CenterWrapper from './CenterWrapper'
import Certificate from './Certificate'

const Quizes = [
  {
    question: '1. এদের মদ্ধে বঙ্গবন্ধু শেখ মুজিবর রহমানের হত্যাকারী কে? ',
    answers: [
      {
        text: 'মেজর জিয়া',
        isCorrect: true,
      },
      {
        text: 'খালেদা জিয়া',
        isCorrect: false,
      },
      {
        text: 'মেজর জিয়া',
        isCorrect: false,
      },
      {
        text: 'খালেদা জিয়া',
        isCorrect: false,
      },
    ],
  },
  {
    question: '2. এদের মদ্ধে বঙ্গবন্ধু শেখ মুজিবর রহমানের হত্যাকারী কে? ',
    answers: [
      {
        text: 'মেজর জিয়া',
        isCorrect: true,
      },
      {
        text: 'খালেদা জিয়া',
        isCorrect: false,
      },
      {
        text: 'মেজর জিয়া',
        isCorrect: false,
      },
      {
        text: 'খালেদা জিয়া',
        isCorrect: false,
      },
    ],
  },
  {
    question: '3. এদের মদ্ধে বঙ্গবন্ধু শেখ মুজিবর রহমানের হত্যাকারী কে? ',
    answers: [
      {
        text: 'মেজর জিয়া',
        isCorrect: true,
      },
      {
        text: 'খালেদা জিয়া',
        isCorrect: false,
      },
      {
        text: 'মেজর জিয়া',
        isCorrect: false,
      },
      {
        text: 'খালেদা জিয়া',
        isCorrect: false,
      },
    ],
  },
  {
    question: '4. এদের মদ্ধে বঙ্গবন্ধু শেখ মুজিবর রহমানের হত্যাকারী কে? ',
    answers: [
      {
        text: 'মেজর জিয়া',
        isCorrect: true,
      },
      {
        text: 'খালেদা জিয়া',
        isCorrect: false,
      },
      {
        text: 'মেজর জিয়া',
        isCorrect: false,
      },
      {
        text: 'খালেদা জিয়া',
        isCorrect: false,
      },
    ],
  },
]

const banglaNumericValue = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০', '১১', '১২', '১৩', '১৪']

const QuizWrapper = ({ item }) => {
  const audioRef = useRef()
  const [quizIndex, setQuizIndex] = useState(0)
  const [correctAnsIndex, setCorrectAnsIndex] = useState(null)
  const [wrongAnsIndex, setWrongAnsIndex] = useState(null)

  // handler function
  const handleCheckAnswer = (ansIndex) => {
    if (Quizes[quizIndex].answers[ansIndex].isCorrect === true) {
      setQuizIndex(quizIndex + 1)
      setCorrectAnsIndex(null)
      setWrongAnsIndex(null)
      const audio = new Audio('/assets/audio/right_sound.mp3')
      audio.play()
    } else {
      const index = Quizes[quizIndex].answers.findIndex((item) => item.isCorrect === true)
      setCorrectAnsIndex(index)
      setWrongAnsIndex(ansIndex)
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
            <h3 className="text-2xl">{Quizes[quizIndex].question}</h3>
            <div className="absolute top-0 px-2 py-1 text-sm text-white -translate-x-1/2 -translate-y-1/2 bg-orange-600 w-36 rounded-2xl inset-x-1/2">
              প্রশ্ন {banglaNumericValue[quizIndex]}/১৪
            </div>
          </article>

          <section className="flex flex-wrap justify-between">
            {Quizes[quizIndex].answers.map((item, index) => {
              return (
                <button
                  className={clsx(
                    ' p-4 rounded-md mb-8  border w-[48%] cursor-pointer text-left',
                    index !== wrongAnsIndex && index !== correctAnsIndex && 'border-neutral-300 bg-white',
                    index === wrongAnsIndex && 'border-red-400 bg-red-600/20',
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

          <p className="text-sm text-gray-500">*Please select right answer to see next quiz.</p>
        </>
      )}

      {quizIndex >= Quizes.length && <Certificate />}
    </CenterWrapper>
  )
}

export default QuizWrapper
