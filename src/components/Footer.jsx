import React from 'react'
import "../Assets/Cardestyle.scss"

// import logop from '../images/logop.jpg'

import styled from 'styled-components'

const Foot = styled.div`
.pied{
     width: 100%;
    height: 80px;
    //  border-top: 1px solid black;
    background: #0A1322;
     margin-top: 20px;
     padding-top: 20px;
     padding-left: 20px;
    color: white;
    // grid-template-columns: 50% 50% ;
    // display: grid;
}
p{
  margin-bottom: 20px;
}
.logofooter{
    width: 60px;
    height: 60px;
}
@media screen and (max-width: 360px){

    .pied{
       width: 10%;
       height: 80px;
       background: white;
        margin-top: 20px;
        // padding-top: 20px;
        // padding-left: 20px;
       color: ;
       text-align: center;
       color: black;
       
   }
}
@media screen and (max-width: 4110px){

    .pied{
       width: 100%;
       height: 80px;
       background: white;
        margin-top: 20px;
        padding-top: 20px;
        // padding-left: 20px;
       color: black;
       text-align: center;

       
   }

}
`

const Footer = () => {
    return (
        <Foot>

    <div className='pied'>
        <div>
 <p>
 © Copyright 2018, All rights reserved. Design by Kinshasa digital
 </p>
 </div>
 {/* <div>
 <img src={logop} alt="logo" className="logofooter" /><h1></h1> Allociné
 </div> */}
 </div>
    </Foot>
    )
}
 export default Footer