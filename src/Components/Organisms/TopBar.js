import Title from '../../Components/Atoms/Title';

import styledComponents from 'styled-components'
import Search from '../Molecules/Search';
import SearchField from '../Molecules/SearchField'

const Topbar = styledComponents.div`
  display: flex;
  justify-content: space-between;
`

const initialDetails = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/M3I0djBm_PCYQ44FDVmtJEai1am2wNJu6C6dDj72ODc/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi5w/aW5jaG9meXVtLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvTmlj/ZS1DcmVhbS02Lmpw/Zw",
    title: "Icecream",
    quantity: "12",
    price: "100",
    description: 'Yo baraf ho hai'
  },
  {
    id: 2,
    img: "https://shoppinglife.lk/wp-content/uploads/2021/11/olive-oil-1-922x1024.png",
    title: "Extra virgin olive oil",
    quantity: "10",
    price: "420",
    description: 'Yo suddha olive ko tel ho'
  },
]


const TopBar = () => {

    return (
        <Topbar>
        <Title title="Inventory" />  
        {/* <Search details={initialDetails}/> */}
        <SearchField />

      </Topbar>
    );
  }

  export default TopBar