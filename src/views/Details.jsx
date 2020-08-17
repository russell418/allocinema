import React,  { useEffect, useState } from 'react'
import { Grid, Card, Image, Button, Item } from 'semantic-ui-react'
import styled from 'styled-components'
import Header from '../components/Header'
import axios from 'axios'
import Footer from '../components/Footer'
// import Item from '../components/Item'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Div = styled.span`

Div{
 
    // padding-left: 60px; 
    // padding-right: 60px; 
      // background: red;
}
.container{
// margin-left: 200px;
// margin-right: 200px;
// border: 1px solid black;
// padding-left: 90px;
// padding-right: 90px;
margin-top: 70px;
background: #091322;
color: white;
width: 100%;
height: 560px;
// display: grid;
// grid-template-columns: 1fr 1fr ;
}


.containerdetails{
  background: #091322;
  color: white;
  padding-top: 40px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: 30px;
  padding-bottom: 30px;
}


@media screen and (max-width: 768px) {
  .containerdetails{
    background: #091322;
    color: white;
    padding-top: 20px;
    // padding-left: 5px;
    // padding-right: 5px;
    text-align: center;
    margin-top: 110px;
    padding-bottom: 30px;
    // margin-bottom: 90px;
  }
  h1{
    color: #00FEE6;
    //  margin-top: 80px;
  }
}

@media screen and (max-width: 411px) {
  .containerdetails{
    background: #091322;
    color: white;
    padding-top: 10px;
    //  padding-left: 20px;
    // padding-right: 5px;
    text-align: center;
    margin-top: 10px;
    padding-bottom: 30px;
  }
  h1{
    color: #00FEE6;
     margin-top: 80px;
    //  margin-left: 20px;
  }
  .image{
        // position: center;
        // margin-left: 200px;
        margin-bottom: 250px;
        margin-left: 33px;
    }
}


// .containertitre{
//     margin-left: 40px;
//     }
    // .image{
    //     position: center;
    //     margin-left: 200px;
    // }
    .image {
      width: 300px;
      height: 180px;
    }
    h1{
      color: #00FEE6;
      margin-top: 30px;
    }
    h3{
      margin-top: 50px;
    }
    }
    @media screen and (max-width: 375px) {
      .containerdetails{
        background: #091322;
        color: white;
        padding-top: 10px;
        padding-left: 0;
        padding-right: 0;
        text-align: center;
        margin-top: 10px;
        padding-bottom: 30px;
        width: 100% !important;
      }
      .image{
        // position: center;
        // margin-left: 200px;
        margin-bottom: 280px;
        // margin-left: 33px;
    }
    }
`


const description = [
  'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
  'tiny stature, and even others for their massive size.',
].join(' ')


const Details = () => {

  let {id} = useParams()
  const params =  {id}
  console.log(params.id);
  
  
  const [cinema, setCinema] = useState([]);
const [genres, setGenre] = useState([]);
// const  [production_countries, setCompagnie] = useState([]);
const  [text, setText] = useState("marveil");
useEffect(() =>{
  axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=e328b532f3c60b5f93231b4606d40400&language=fr`)
 .then((res) => {
   setCinema(res.data)
   setGenre(res.data.genres)
  //  setCompagnie(res.data.setCompagnie)
   console.log("miss"+JSON.stringify(res.data))
 })
 .catch((e) => console.log(e))
}, [])

  return ( 
  
    <Div>
  
   <Header />   

  <Grid reversed='mobile vertically' className="containerdetails">
  <Item.Group>
   <Item>
     <div>
     <Item.Image size='small' className="image"  style={{width:"350px", height:"160px", marginTop:"20px"}} src={cinema.poster_path === null?"https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg":  "http://image.tmdb.org/t/p/w300" +cinema.poster_path} />
     </div>
     <Item.Content>
       <Item.Header as='a'><h1>{cinema.title}</h1></Item.Header>
       <h3>Genre: {genres.map((genre) => genre.name).join(' / ')}</h3>
          <h3>Description: {cinema.overview === null?<p>pas de description pour ce film</p>:cinema.overview}</h3>
          <h3>Date de sortie: {cinema.release_date}</h3>
       <br />
       <Link to ="/">  <Button inverted color='blue'>
        Retour
      </Button></Link>
     </Item.Content>
   </Item>
 </Item.Group>

    <Grid.Row className="cotainer">
      <Grid.Column className="containertitre">
    
      </Grid.Column>
    </Grid.Row>
  </Grid>

  {/* <br /> */}
<Footer />
  </Div>
)
}

export default Details
