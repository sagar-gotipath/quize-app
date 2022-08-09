import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Certificate from './components/Certificate'
import QuizWrapper from './components/QuizWrapper'
import UserForm from './components/UserForm'
import Video from './components/Video'
import quizes from './data/quizes'

export const AppContext = createContext()

function App() {
  const [componentIndex, setComponentIndex] = useState(0)
  const [userInfoForStore, setUserInfoToStore] = useState({})

  const handleUserData = (userObject) => {
    setUserInfoToStore({ ...userObject })
  }
  return (
    <AppContext.Provider
      value={{
        setComponentIndex: setComponentIndex,
        handleUserData: handleUserData,
        userInfoForStore: userInfoForStore,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {componentIndex === 0 && <UserForm />}
                {componentIndex === 1 && <Video />}
                {componentIndex === 2 && <QuizWrapper Quizes={quizes} />}
                {/* {componentIndex === 3 && <Certificate />} */}
              </>
            }
          />

          {/* shareable link */}

          <Route path=":user-slug" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
