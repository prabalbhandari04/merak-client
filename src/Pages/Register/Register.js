import React from 'react'

import { Container} from '@mui/material';

import CreateAccount from '../../Components/Molecules/CreateAccount'
import AddTeam from '../../Components/Molecules/AddTeam'
import Switcher from '../../Components/Molecules/CreateNav'

import styledComponents from 'styled-components'

const Cont = styledComponents.div`
    display: flex;
    column-gap: 4rem;
`

const Register = () => {
  return (
      <>
        <Container style={{marginTop: '100px', marginLeft: '60px'}}>
            <Cont>
                <CreateAccount /> 
                <Switcher />
            </Cont>

            
        </Container>
      </>
  )
}

export default Register