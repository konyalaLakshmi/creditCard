// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 50%;
  background-color: #3b4b69;
  align-items: center;
  justify-content: space-between;
`

export const Heading = styled.h1`
  font-size: 26px;
  color: white;
  font-weight: bold;
`

export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 300px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  border-radius: 8px;
  margin-bottom: 150px;
`

export const P = styled.p`
  font-size: 13px;
  color: white;
`

export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 50%;
  background-color: white;
  align-items: center;
  justify-content: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Heading2 = styled.h1`
  color: black;
  font-weight: bold;
  font-size: 18;
`
export const InputElement = styled.input`
  width: 180px;
  padding: 4px;
  color: black;
  font-size: 12px;
  margin-bottom: 8px;
  border: 1px solid grey;
`

export const Para = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
`
