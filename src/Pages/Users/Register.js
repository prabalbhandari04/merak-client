import React, { useState, useContext } from 'react'
import {AllContext} from '../../context/allContext'

import { Container} from '@mui/material';

import CreateAccount from '../../Components/Molecules/CreateAccount'
import AddTeam from '../../Components/Molecules/AddTeam'
import Switcher from '../../Components/Molecules/CreateNav'

import styledComponents from 'styled-components'

const Cont = styledComponents.div`
    display: flex;
    column-gap: 3rem;
`

const Register = () => {

  const {steps} = useContext(AllContext)

  return (
      <>
        <Container style={{marginTop: '100px', marginLeft: '60px'}}>
            <Cont>
              {
                steps === 1?
                <CreateAccount /> :
                steps === 2?
                <AddTeam />:
                <></>
              }
                <Switcher />
            </Cont>

            
        </Container>
      </>
  )
}

export default Register