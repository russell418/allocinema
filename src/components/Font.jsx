import React from 'react'
import "../Assets/Cardestyle.scss"
 import twtba from '../images/twtba.jpg'

import styled from 'styled-components'

const Foot = styled.div`
.pied{
     width: 100%;
     height: 400px;
    //  border-top: 1px solid black;
    background: #F7F8F6;
    //  margin-top: 20px;
    //  padding-top: 20px;
    //  padding-left: 20px;
    // color: white;
    //  position: fixed;
    // margin-top: 600px;
    // z-index: 3px;
    // grid-template-columns: 50% 50% ;
    // display: grid;
    // margin-top: 1220px;
}


  .divcolorphoto{
    width: 100%;
    height: 840px;
    //  border-top: 1px solid black;
    background: #F2F2F2;
    //  margin-top: 20px;
    //  padding-top: 20px;
    //  padding-left: 20px;
    color: white;
    // margin-top: 790px;
  }

`

const Footer = () => {
    return (
        <Foot>

    <div className='pied'>
    <img src={twtba} style={{width:"100%",position:"fixed", height:"300px", zIndex:"99"}} alt="logo" className="logoph" />
   </div>

<div className="divcolorphoto">

</div>
    </Foot>
    )
}
 export default Footer
