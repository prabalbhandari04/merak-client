import Title from '../../Components/Atoms/Title';

import styledComponents from 'styled-components'

import SearchField from '../Molecules/SearchField'

const Topbar = styledComponents.div`
  display: flex;
  justify-content: space-between;
`


const TopBar = () => {

    return (
        <Topbar>
        <Title title="Inventory" />  

        <SearchField />

      </Topbar>
    );
  }

  export default TopBar