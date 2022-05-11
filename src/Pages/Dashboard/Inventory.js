import React from 'react'
import styledComponents from 'styled-components'
import Card from '../../Components/Organisms/Card/Card'

const data = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/M3I0djBm_PCYQ44FDVmtJEai1am2wNJu6C6dDj72ODc/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi5w/aW5jaG9meXVtLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvTmlj/ZS1DcmVhbS02Lmpw/Zw",
    title: "Icecream",
    quantity: "12"
  },
  {
    id: 2,
    img: "https://imgs.search.brave.com/M3I0djBm_PCYQ44FDVmtJEai1am2wNJu6C6dDj72ODc/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi5w/aW5jaG9meXVtLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvTmlj/ZS1DcmVhbS02Lmpw/Zw",
    title: "Icecream",
    quantity: "12"
  },
]

const CardContainer = styledComponents.div`
  display: flex;
  gap: 2rem;
`

const Inventory = () => {
  return (
    <div>
        <h1>Inventory</h1>

        <CardContainer>
          {
            data.map((item, index) => (
              <Card img_src={item.img} title={item.title} quantity={item.quantity} key={index}/>
            ))
          }
        </CardContainer>

    </div>
  )
}

export default Inventory