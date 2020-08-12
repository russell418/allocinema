import React from 'react'

import styled from 'styled-components'

const Foot = styled.div`
.pied{
    width: 100%;
    height: 60px;
    //  border-top: 1px solid black;
    background: #091322;
     margin-top: 20px;
     padding-top: 20px;
     padding-left: 20px;
    color: white;
}
p{
  margin-bottom: 20px;
}
`

const Footer = () => {
    return (
        <Foot>

    <div className='pied'>
 <p>Kinshasa digital académy</p>
    </div>

    </Foot>
    )
}
 export default Footer