import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import Button from './Button'
import CenterWrapper from './CenterWrapper'

const defaultUserInfo = { name: '', phoneNumber: '' }

const UserForm = () => {
  const { setComponentIndex } = useContext(AppContext)
  const [userInfo, setUserInfo] = useState(defaultUserInfo)

  // handler functions
  const handleChange = (e) => {
    if ([e.target.name] === 'phoneNumber') {
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(userInfo)
    setUserInfo(defaultUserInfo)
    setComponentIndex(1)
  }
  return (
    <CenterWrapper>
      <img src="/assets/images/mujib.png" alt="15 august" className="mx-auto" />
      <form className="max-w-lg px-12 py-10 mx-auto bg-white rounded-lg" onSubmit={handleSubmit}>
        <h2 className="mb-12 text-3xl text-center">কুইজে অংশগ্রহণ করতে আপনার নাম এবং ফোন নাম্বার দিন</h2>
        <div className="relative mb-5">
          <input
            type="text"
            name="name"
            id="name"
            value={userInfo.name}
            onChange={handleChange}
            placeholder="নাম"
            required
            pattern="[A-Za-z]+"
            onInvalid={(e) => e.target.setCustomValidity('Enter your name without special charecter')}
            onInput={(e) => e.target.setCustomValidity('')}
            className="relative w-full py-3 placeholder-transparent transition bg-transparent border px-7 border-neutral-400 rounded-3xl focus:outline-none peer"
          />
          <label
            htmlFor="name"
            className="absolute px-2 text-gray-400 transition-all bg-white left-7 -top-2.5 peer-placeholder-shown:top-3 peer-placeholder-shown:px-0-1 peer-placeholder-shown:bg-transparent text-sm peer-placeholder-shown:text-base"
          >
            নাম
          </label>
        </div>
        <div className="relative mb-5 ">
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={userInfo.phoneNumber}
            onChange={handleChange}
            placeholder="ফোন নাম্বার"
            pattern="\d*"
            maxlength="11"
            minLength="11"
            onInvalid={(e) => e.target.setCustomValidity('Enter your 11 digit phone number')}
            onInput={(e) => e.target.setCustomValidity('')}
            required
            className="relative w-full px-8 py-3 placeholder-transparent transition border border-neutral-400 rounded-3xl focus:outline-none peer"
          />
          <label
            htmlFor="phoneNumber"
            className="absolute px-2 text-gray-400 transition-all bg-white left-7 -top-2.5 peer-placeholder-shown:top-3 peer-placeholder-shown:px-0-1 peer-placeholder-shown:bg-transparent text-sm peer-placeholder-shown:text-base"
          >
            ফোন নাম্বার
          </label>
        </div>
        <Button type="submit">অংশগ্রহণ করুন</Button>
      </form>

      <div className="flex justify-center my-10 space-x-5">
        <img src="/assets/images/deepto_logo.png" alt="deepto TV logo" className="w-[130px] h-auto" />
        <img src="/assets/images/gotipath_logo.png" alt="deepto TV logo" className="w-[130px] h-auto" />
      </div>
    </CenterWrapper>
  )
}

export default UserForm
