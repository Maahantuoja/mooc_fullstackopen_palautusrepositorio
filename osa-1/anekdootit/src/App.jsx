/* eslint-disable no-unused-vars */
// Tehtävät 1.12 - 1.14
import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const GetRandomInt = () => {
  const getRandomInt = () => {
    const max = 9

    console.log(Math.floor(Math.random() * max))
    // return Math.floor(Math.random() * max)
  } 
}

const App = () => {
  const [selected, setSelected] = useState(0)

  const getRandomAnecdote = () => {
    const max = anecdotes.length
    
    setSelected(Math.floor(Math.random() * max))
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <Button onClick={getRandomAnecdote} text='Next Anecdote' />
    </>
  )
}

export default App