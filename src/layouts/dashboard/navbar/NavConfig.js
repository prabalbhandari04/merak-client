
import { MdOutlineInventory, MdOutlineBorderColor } from 'react-icons/md';
import { TbFileInvoice } from 'react-icons/tb';

const sidebarConfig = [
 
  {
    // subheader: 'Inventory',
    items: [
      { title: 'Inventory', path: '/dashboard/inventory', icon: <MdOutlineInventory /> },
      { title: 'Order', path: '/dashboard/order', icon: <MdOutlineBorderColor /> },
      { title: 'Invoice', path: '/dashboard/invoice', icon: <TbFileInvoice /> },
    ],
  },

  
];

export default sidebarConfig;
