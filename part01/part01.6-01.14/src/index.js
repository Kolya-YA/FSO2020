import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ feedbacks }) => {
  const all = feedbacks.good + feedbacks.neutral + feedbacks.bad
  const avrg = (feedbacks.good - feedbacks.bad) / all
  const positive = feedbacks.good / all * 100

  if (all) {
    return (
      <table>
        <tbody>
          <Statistic text='Good' data={feedbacks.good} />
          <Statistic text='Neutral' data={feedbacks.good} />
          <Statistic text='Bad' data={feedbacks.good} />
          <Statistic text='All' data={all} />
          <Statistic text='Average' data={avrg} />
          <Statistic text='Positive' data={positive} />
        </tbody>
      </table>
    )
  } else {
    return (
      <div>
        No feedback given
      </div>
    )
  }  
}

const Statistic = ({ text, data }) => (
<tr>
  <td>{text}</td>
  <td>{data}{text === 'Positive' && '%'}</td>
</tr>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0, neutral: 0, bad: 0
  })

const handleFeddbackClick = (kind) => {
  return () => setFeedbacks({...feedbacks, [kind]: feedbacks[kind] + 1})
}

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button onClick={handleFeddbackClick('good')} text='Good'/>
        <Button onClick={handleFeddbackClick('neutral')} text='Neutral' />
        <Button onClick={handleFeddbackClick('bad')} text='Bad' />
        <h2>Statistics</h2>
        <Statistics feedbacks={feedbacks} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))