import {useState} from 'react'
import styled from 'styled-components'

import {
  BgContainer,
  Heading,
  Heading2,
  Container1,
  Container2,
  ImageContainer,
  InputElement,
  Para,
  InputContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, updateNumber] = useState('')
  const [cardName, updateName] = useState('')

  const onUpdateName = event => {
    updateName(event.target.value)
  }

  const onUpdateNumber = event => {
    updateNumber(event.target.value)
  }

  return (
    <BgContainer>
      <Container1>
        <Heading>CREDIT CARD</Heading>
        <ImageContainer data-testid="creditCard">
          <Para>{cardNumber}</Para>
          <Para>CARDHOLDER NAME</Para>
          <Para>{cardName}</Para>
        </ImageContainer>
      </Container1>
      <Container2>
        <InputContainer>
          <Heading2>Payment Method</Heading2>
          <InputElement placeholder="Card Number" onChange={onUpdateNumber} />
          <InputElement placeholder="Cardholder Name" onChange={onUpdateName} />
        </InputContainer>
      </Container2>
    </BgContainer>
  )
}

export default CreditCard
