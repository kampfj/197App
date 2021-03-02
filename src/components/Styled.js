import s from 'styled-components'

export const StyledH1 = s.h1`
  margin-top: 80px;
  text-align: center;
`

export const StyledDiv = s.div`
  margin-bottom: 20px;
  padding-top: 38px;
`

export const SpecialDiv = s.div`
  border-radius: 15px;
  margin-top: 5px;
  margin-bottom: 30px;
`
export const StyledPostDiv = s.div`
  text-align: center;
  margin-top: 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  height: 200px;
`
export const StyledNameInput = s.input`
  width: 75%;
  height: 40px;
  border-radius: 4px;
  position: relative;
  margin-bottom: 5px;
  background-color: white;
  transition: 0.1s all;
  &:hover {
    background-color: AliceBlue;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
`
export const StyledPostInput = s.textarea`
  width: 80%;
  height: 90px;
  border-radius: 4px;
  padding-bottom: 60px;
  position: relative;
  background-color: rgba(255,255,255,0.3);
  transition: 0.3s all;
  text-align: top;
  &:hover {
    background-color: AliceBlue;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
`

export const ButtonDiv = s.div`
  height: 5px;
  width: 250px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const UpArrow = s.button`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
`

export const DownArrow = s.button`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`