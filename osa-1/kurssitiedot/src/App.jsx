/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const course = 'Give feedback'
  const statistics = 'Statistics'

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <Header text={course} />

      <Button onClick={handleGoodClick} text='Good' />{' '}
      <Button onClick={handleNeutralClick} text='Neutral' />{' '}
      <Button onClick={handleBadClick} text='Bad' />

      <Header text={statistics} />

      <p>
        Good {good}<br />
        Neutral {neutral}<br />
        Bad {bad}
      </p>
    </>
  )
}

export default App
