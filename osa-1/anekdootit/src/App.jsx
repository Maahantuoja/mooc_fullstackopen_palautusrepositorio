// Tehtävät 1.12 - 1.14
import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const AnecdoteDisplay = ({ anecdote, votes }) => {
  return (
    <p>
      {anecdote}<br />
      has {votes} votes.
    </p>
  )
}

const App = () => {
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

  const [selected, setSelected] = useState(0)
  const [votes, setNewVote] = useState(Array(anecdotes.length).fill(0))

  const maxVotes = Math.max(...votes)
  const mostVotesIndex = votes.indexOf(maxVotes)

  const getRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVotes = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setNewVote(newVotes)
  }

  return (
    <>
      <Header text={'Anecdote of the day'} />
      <AnecdoteDisplay anecdote={anecdotes[selected]} votes={votes[selected]} />

      <Button onClick={handleVotes} text='Vote' />{' '}
      <Button onClick={getRandomAnecdote} text='Next Anecdote' />

      <Header text={'Anecdote with most votes'} />
      <AnecdoteDisplay anecdote={anecdotes[mostVotesIndex]} votes={votes[mostVotesIndex]} />
    </>
  )
}

export default App