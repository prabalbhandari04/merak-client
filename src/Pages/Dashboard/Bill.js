import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bill.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from '../../Components/Organisms/InvoiceForm';
import Invoice from '../../Components/Organisms/Invoice';

const bill = {
  currency: '₹',
  currentDate: '2022/01/20',
  invoiceNumber: '123',
  dateOfIssue: '01/01/2020',
  billTo: 'John Doe',
  billToAddress: '123 Main Street',
  billToEmail: 'yes@gmai.com',
  billFrom: 'Jane Doe',
  billFromAddress: '123 Main Street',
  billFromEmail: 'no@gmail.com',
  notes: 'Notes',
  total: '0.00',
  subTotal: '0.00',
  taxRate: '',
  taxAmmount: '0.00',
  discountRate: '',
  discountAmmount: '0.00',
  products: {
    id : 1,
    name : 'Product 1',
    description : 'Product 1 description',
    price : '100.00',
    quantity : '1',
  }
  
};

const Bill = () => {
    return (
        <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        {/* <InvoiceForm /> */}
        <Invoice />
        {/* <h1>{bill.products.name}</h1> */}
      </Container>
    </div>
    );
    }
export default Bill;
