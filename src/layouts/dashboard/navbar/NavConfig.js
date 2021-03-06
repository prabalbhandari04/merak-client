
import { MdOutlineInventory, MdOutlineBorderColor } from 'react-icons/md';
import { TbFileInvoice } from 'react-icons/tb';
import { HiUserGroup } from 'react-icons/hi';
import { BsPeopleFill } from 'react-icons/bs';

const sidebarConfig = [
 
  {
    // subheader: 'Inventory',
    items: [
      { title: 'Inventory', path: '/dashboard/inventory', icon: <MdOutlineInventory /> },
      { title: 'Order', path: '/dashboard/order', icon: <MdOutlineBorderColor /> },
      { title: 'Teams', path: '/dashboard/teams', icon: <HiUserGroup /> },
      { title: 'Invoice', path: '/dashboard/invoice', icon: <TbFileInvoice /> },
      { title: 'Customer', path: '/dashboard/customer', icon: <BsPeopleFill /> },
    ],
  },

  
];

export default sidebarConfig;
