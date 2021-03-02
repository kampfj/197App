import React, { useState } from 'react'
import Title from './Title'
import PostForm from './PostForm'
import Comment from './Comment'
import { StyledDiv } from './Styled.js'

const App = () => {
  const [posts, setPosts] = useState([])
  const [reply, setReply] = useState(false)
  
  return (
    <>
      <Title/>
      <PostForm posts={posts} setPosts={setPosts}> </PostForm>
      {posts.map(({post, userName, id, children}) => (
        <StyledDiv className="row d-flex justify-content-center" key={id}>
          <Comment posts={posts} setPosts={setPosts} post={post} userName={userName} depth={3}/>
        </StyledDiv>
      ))}
    </>
  )
}
export default App 