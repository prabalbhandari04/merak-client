import React from 'react'
import styledComponents from 'styled-components'

const Cardo = styledComponents.div`
  display: flex;
  flex-direction: column;
  cursor:pointer;
  height: 200px;
  width: max-content;
  line-height: 6px;
  
`

const Img = styledComponents.img`
  height: 80%;
  width: 140px;
  object-fit: cover;
  border-radius: 4px;
`

const Title = styledComponents.p`
  font-size: 16px;
`

const Quan = styledComponents.p`
  font-size: 12px;
  color: #00A7E3;

`

const Card = ({img_src, title, quantity}) => {
  return (
    <Cardo>
      <Img src={img_src} />
      <Title>{title}
        <Quan>{quantity} Orders</Quan>
      </Title>
    </Cardo>

  )
}

export default Card