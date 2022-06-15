import React, {useEffect, useState, useMemo} from 'react';
import styledComponents from 'styled-components'



//Redux
import {useSelector, useDispatch} from 'react-redux';
import {loadOrders} from '../../Redux/Actions/ordersActions';


    

const Invoice = () => {
  const dispatch = useDispatch(); //Redux Dispatch
  const {orders} = useSelector(state => state.data1); //Redux State

  //Fetching All Products - loadProducts le redux ko -> Action ma (dispatch gareko) Api call gareko cha (GET)
  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);
  

  console.log(orders)




    const [isOpen] = useState(false);
    const [currency] = useState('$');
    const [invoiceNumber] = useState('#123');
    const [currentDate] = useState('01/01/2020');
    const [dateOfIssue] = useState('01/01/2020');
    const [billTo] = useState('John Doe');
    const [billToAddress] = useState('123 Main Street');
    const [billToEmail] = useState('john_126@gmail.com');
    const [billFrom] = useState('Jane Doe');
    const [billFromAddress] = useState('123 Main Street');
    const [billFromEmail] = useState('jane123@gmail.com');
    const [notes] = useState('Notes');
    const [total] = useState('$0.00');
    const [subTotal] = useState('$0.00');
    const [taxRate] = useState('$0.00');
    const [taxAmmount] = useState('$0.00');
    const [discountRate] = useState('$0.00');
    const [discountAmmount] = useState('$0.00');
  
  return (
<>
       <h1>{orders[0]}</h1>
        
    </>
  )
}
  export default Invoice;

// const bill = {
//     currency: '@',
//     currentDate: '@',
//     invoiceNumber: '#123',
//     dateOfIssue: '01/01/2020',
//     billTo: 'John Doe',
//     billToAddress: '123 Main Street',
//     billToEmail: 'yes@gmai.com',
//     billFrom: 'Jane Doe',
//     billFromAddress: '123 Main Street',
//     billFromEmail: 'no@gmail.com',
//     notes: 'Notes',
//     total: '1050.00',
//     subTotal: '1100.00',
//     taxRate: '10.00%',
//     taxAmmount: '100.00',
//     discountRate: '5%',
//     discountAmmount: '50.00',
//   };