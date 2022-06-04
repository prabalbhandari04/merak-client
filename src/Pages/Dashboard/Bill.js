import React, {useEffect, useState, useMemo} from 'react';
import Container from 'react-bootstrap/Container';
import InvoiceForm from '../../Components/Organisms/InvoiceForm';

const Bill = () => {


    return (
        <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <InvoiceForm/>
      </Container>
    </div>
    )
}

export default Bill;