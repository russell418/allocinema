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
// .containertitre{
//     margin-left: 40px;
//     }
    .image{
        position: center;
        margin-left: 200px;
    }
    .image {
      width: 300px;
      height: 200px;
    }
    h1{
      color: white;
      margin-top: 30px;
    }
    h3{
      margin-top: 50px;
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
  <Grid reversed='mobile vertically' className="container">


  <Item.Group>
   

   <Item>
     <Item.Image size='small' className="image"  style={{width:"350px", height:"200px", marginTop:"20px"}} src={cinema.poster_path === null?"https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg":  "http://image.tmdb.org/t/p/w300" +cinema.poster_path} />

     <Item.Content>
       <Item.Header as='a'><h1>{cinema.title}</h1></Item.Header>
       <h3>Genre: {genres.map((genre) => genre.name).join(' / ')}</h3>
          <h3>Description: {cinema.overview === null?<p>pas de description pour ce film</p>:cinema.overview}</h3>
          <h3>Date de sortie: {cinema.release_date}</h3>
       {/* <Item.Description content={description} /> */}
     </Item.Content>
   </Item>
   <Link to ="/">  <Button inverted color='blue'>
        Blue
      </Button></Link>

 </Item.Group>





    <Grid.Row className="cotainer">
      <Grid.Column className="containertitre">
      {/* <h2>{cinema.title}</h2>
          <p>description de ce film</p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row className="cotainer">
      <Grid.Column>
      <Card className="image">
    <Image  src={cinema.poster_path === null?"https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg":  "http://image.tmdb.org/t/p/w300" +cinema.poster_path} />
   
  </Card>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row className="cotainer">
      <Grid.Column className="containertitre">
  <p>{genres.map((genre) => genre.name).join(' : ')}</p>
          <p>{cinema.overview}</p>

  <p>date de sortie: {cinema.release_date}</p>
          {/* <p>{production_countries.map((maison) => maison.name).join(' : ')}</p> */}
          {/* <p>page </p>
          <br />
      */}
        {/* <Link to ="/">  <Button inverted color='blue'>
        Blue
      </Button></Link> */} */}
      </Grid.Column>
    </Grid.Row>
  </Grid>


{/* <Item /> */}

<Footer />
  </Div>
)
}

export default Details


{/* <Item.Group>
    <Item>
      <Item.Image size='tiny' src={cinema.poster_path === null?"https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg":  "http://image.tmdb.org/t/p/w300" +cinema.poster_path} />

      <Item.Content>
        <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description>papa</Item.Description>
      </Item.Content>
    </Item>
    
  </Item.Group> */}