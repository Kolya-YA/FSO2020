import React from 'react'
import ReactDOM from 'react-dom'

const Part = props => (
  <p>{props.part_data.name} {props.part_data.exercises}</p>
)

const Header = props => (
  <h1>{props.course}</h1>
)

const Content = props => (
  <p>
    <Part part_data={props.parts[0]}/>
    <Part part_data={props.parts[1]}/>
    <Part part_data={props.parts[2]}/>
  </p>
)

const Total = props => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))