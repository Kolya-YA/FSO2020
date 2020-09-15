import React from 'react'

const CourseContent = ({ parts }) => (
  <ul>
    {parts.map(part => (
      <li key={part.id}>{part.name} — {part.exercises}</li>
    ))}
  </ul>
)

const CourseTotal = ({ parts }) => {
  const sumTotal = parts.reduce((acc, cur) => acc + cur.exercises, 0)
  return (
    <p><strong>Total of {sumTotal} exercises</strong></p>
  )
}

const Courses = ({ courses }) => {
  return (
    <>
      {courses.map(course => {
        return (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <CourseContent parts={course.parts} />
            <CourseTotal parts={course.parts} />
          </div>
        )
      })}
    </>
  )
}

export default Courses