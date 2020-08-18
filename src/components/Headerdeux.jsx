import React from 'react'
import { Input, Header, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import "../Assets/Headerstyle.scss"


const Head = styled.div`

.cherche{
  background:  #091322;
  height: 70px;
  padding-top: 15px;
  padding-left: 150px;
  padding-right: 150px;
}
inputrecherche{

 border-radius: 100px !important;
 

}
.Input{

  border-radius: 100px;
}

`

const Headerdeux = () => (
  <Head>
<div class="ui inverted menu" style={{background:"black",color:"black", position:"fixed", width:"100%", zIndex:"3", top:"0"}}>

  <a class="item active" style={{color:"black"}}>Home </a>
  <a class="item">Messages </a>
  <a class="item">Amis </a>
</div>
  </Head>

)

export default Headerdeux