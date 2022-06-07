import React from 'react'

import styledComponents from 'styled-components'

const Container = styledComponents.div`
  height: 88vh;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  gap: 3rem;

  h3{
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
  const [direction, setDirection] = React.useState({
    add: 'column',
    team: 'column-reverse',
    avatar: 'column-reverse'
  })
  return (
      <>
        <Container flexDirection={direction.add}>
            <Sub />

            <h3>Account Details</h3>
        </Container>
        <Container flexDirection={direction.team}>
            <Sub />

            <h3>Add Team</h3>
        </Container>
        <Container flexDirection={direction.avatar}>
            <Sub />

            <h3>Confirm</h3>
        </Container>
      </>
  )
}

export default Switcher