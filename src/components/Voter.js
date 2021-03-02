import React, { useState } from 'react'
import { UpArrow, DownArrow } from './Styled.js'


const Voter = () => {
  const [likes, setLikes] = useState(0)

  const addLike = () => {
    setLikes(likes + 1)
  }

  const removeLike = () => {
    setLikes(likes - 1)
  }

  return (
    <>
      <UpArrow onClick={addLike}/> &nbsp; {likes} &nbsp; <DownArrow onClick={removeLike}/>
    </>
  )
}

export default Voter