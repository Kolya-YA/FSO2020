import React from 'react'
import Courses from './components/Courses'

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const App = ({ courses }) => {
  
  return (
    <>
      <Header text={'Web development curriculum'} />
      <Courses courses={courses} />
    </>
  )
}

export default App