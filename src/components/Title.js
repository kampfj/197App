import React from 'react'
import ReactDom from 'react-dom'
import s from 'styled-components'

const StyledH1 = s.h1`
  margin-top: 80px;
  text-align: center;
`
const Title = () => ( <StyledH1>A Very Temporary Chat With Yourself</StyledH1> )

export default Title