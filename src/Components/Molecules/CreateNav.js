import React from 'react'
import {AllContext} from '../../context/allContext'

import styledComponents from 'styled-components'

const Container = styledComponents.div`
  height: 88vh;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  gap: 5rem;

  h4{
    width: max-content;
    height: max-content;
    transform: rotate(-90deg);
  }
`

const Sub = styledComponents.div`
    width: 2px;
    background: #0ba2db;
    height: 50%;
`

const Switcher = () => {

  const {direction} = React.useContext(AllContext)

  

  return (
      <>
        <Container flexDirection={direction.add}>
            <Sub />

            <h4>Account Details</h4>
        </Container>
        <Container flexDirection={direction.team}>
            <Sub />

            <h4>Add Team</h4>
        </Container>
        <Container flexDirection={direction.avatar}>
            <Sub />

            <h4>Confirm</h4>
        </Container>
      </>
  )
}

export default Switcher