import React from 'react'
import { Input } from 'semantic-ui-react'
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
    <div className="cherche">
  <Input fluid icon='search' 
  placeholder="chercher le titre d'un film" 
  className="inputrecherche" 
   />
  
  </div>
  </Head>

)

export default Headerdeux