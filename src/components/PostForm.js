import { post } from 'jquery'
import React, { useState } from 'react'
import ReactDom from 'react-dom'
import s from 'styled-components'
import { SpecialDiv, StyledPostDiv, StyledDiv, StyledNameInput, StyledPostInput } from './Styled.js'


const PostForm = ({ posts, setPosts }) => { 
  const [userName, changeUserName] = useState('')
  const [userPost, changeUserPost] = useState('')

  const submitHelper = () => {
    if (userName.length > 0 && userPost.length > 0) {
      setPosts(posts => [...posts, {post: userPost, userName: userName, id: posts.length, children: []}])
      changeUserName("")
      changeUserPost("")
    }
  }
  
  return (
    <>
      <StyledPostDiv className="col d-flex justify-content-center">
         <SpecialDiv className="card border border-primary" style={{ width: '33rem', height: '16rem'}}> 
        <div className="card-header"> New Post </div>
          <div className="card-body">
            <form id="postform">
                <StyledNameInput id="userNameText" type="text" placeholder="Username..." value={userName} onChange={e => changeUserName(e.target.value)}/>
                <br></br>
                <StyledPostInput id="PostText" type="text" placeholder={"Post..."} value={userPost} onChange={e => changeUserPost(e.target.value)} required/>
                <br></br>
            </form>
            <button id="submitButton" type="button" className="btn btn-primary" onClick={submitHelper} form="postform"> Post </button> 
            </div>
        </SpecialDiv>
      </StyledPostDiv>
    </>
  )
}

export default PostForm