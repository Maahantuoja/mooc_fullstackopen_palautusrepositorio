/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <>
    {text}: {value}<br />
  </>

)

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="All" value={props.all} />
      <StatisticLine text="Average" value={props.average} />
      <StatisticLine text="Positive" value={props.positive + " %"} />
    </>
  )
}

const App = () => {
  const course = 'Give feedback'
  const statistics = 'Statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const updateGood = good + 1
    const updateAll = updateGood + neutral + bad
    const updateAverage = (updateGood - bad) / updateAll
    const updatePositive = updateGood / updateAll * 100

    setGood(updateGood)
    setAll(updateAll)
    setAverage(updateAverage)
    setPositive(updatePositive)
  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    const updateAll = good + updateNeutral + bad
    const updateAverage = (good - bad) / updateAll
    const updatePositive = good / updateAll * 100

    setNeutral(updateNeutral)
    setAll(updateAll)
    setAverage(updateAverage)
    setPositive(updatePositive)
  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    const updateAll = good + neutral + updateBad
    const updateAverage = (good - updateBad) / updateAll
    const updatePositive = good / updateAll * 100

    setBad(updateBad)
    setAll(updateAll)
    setAverage(updateAverage)
    setPositive(updatePositive)
  }

  return (
    <>
      <Header text={course} />

      <Button onClick={handleGoodClick} text='Good' />{' '}
      <Button onClick={handleNeutralClick} text='Neutral' />{' '}
      <Button onClick={handleBadClick} text='Bad' />

      <Header text={statistics} />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  )
}

export default App