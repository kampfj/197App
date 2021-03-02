import React, { useState } from 'react'
import { ButtonDiv, StyledDiv, StyledNameInput, StyledPostInput } from './Styled.js'
import Voter from './Voter.js'



const Comment = ({posts, setPosts, post, userName, depth}) => {
  const [clickedReply, toggleReply] = useState(false)
  const [childList, setChildren] = useState([])
  const [userReply, setUserReply] = useState('')
  const [replier, setReplier] = useState('')

  const replyHandler = () => {
    if (depth > 1) {
      setUserReply(`@${userName} `)
      toggleReply(true)
    }
  }

  const submitReply = () => {
    if (replier.length > 0 && userReply.length > 0) {
      const newChild = {newPost: userReply, newUsername: replier, newID: childList.length, newChildren: []}
      setChildren([...childList, newChild])
      toggleReply(false)
      setReplier("")
    }
  }
 
  if (depth == 0) {
    return <div/>
  }

  return (
    <div className="card" position="absolute" style={{width: '55rem'}}>
    <div className="card-header"> @{userName} </div>
      <div className="card-body">
        <p className="card-text">{post}</p>
        <button className="btn btn-secondary" onClick={replyHandler}> Reply </button> &nbsp; &nbsp; &nbsp; &nbsp; <Voter/> 
      </div>
      { clickedReply &&     <StyledDiv>
                            <form id="replyform" className="row d-flex justify-content-center">
                              <StyledNameInput  type="text" placeholder="Username..." value={replier} onChange={e => setReplier(e.target.value)} required />
                              <br></br>
                              <StyledPostInput  type="text" value={userReply} onChange={e => setUserReply(e.target.value)} required />
                              <br></br>
                              <ButtonDiv className="row d-flex justify-content-center" > <button className="row d-flex justify-content-center btn btn-secondary" type="button" onClick={submitReply} form="replyform"> Send Reply </button> </ButtonDiv>
                            </form>
                            </StyledDiv>
                            
                             
                                }
      {childList.map(({ newPost, newUsername, newID }) => (
          <div key={newID}>
            { newPost != undefined && 
            <Comment posts={posts} setPosts={setPosts} post={newPost} userName={newUsername} depth={depth - 1}></Comment> }
          </div>
      ))}
    </div>
  )
  
 }

export default Comment