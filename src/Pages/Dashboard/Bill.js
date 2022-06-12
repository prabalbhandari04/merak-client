import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bill.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from '../../Components/Organisms/InvoiceForm';
import Invoice from '../../Components/Organisms/Invoice';
const Bill = () => {
    return (
        <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <InvoiceForm/>
      </Container>
    </div>
    );
    }
export default Bill;
