import React, { useEffect, useState } from 'react'
import { Card, Grid, Image, Container, Button, Pagination, Input } from 'semantic-ui-react'
import axios from 'axios'
import "../Assets/Cardestyle.scss"
import { Link } from 'react-router-dom';
 import Header from '../components/Header'
 import styled from 'styled-components'
 import Footer from '../components/Footer'




const Div = styled.div`


.gridsecondaire{
  background: #091322;
  padding-left: 7%;
  padding-top: 10px;
}
.divpagination{
  text-align: center;
}
 `
const Span = styled(Input)`

border-radius: 100px ;
`

const Genre = () => {

  
  // const API_TOKEN = "e328b532f3c60b5f93231b4606d40400"
const [Genrefilm, setGenrefilm] = useState([]);
const [data, setData] = useState([]);
const [page, setPage] = useState(1);
const  [text, setText] = useState("marveil");
useEffect(() =>{
  axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=e328b532f3c60b5f93231b4606d40400&language=fr&page=${page}`)
 .then((res) => {
   setData(res.data);
   setGenrefilm(res.data.results)
   console.log(Genrefilm)
 })
 .catch((e) => console.log(e))
}, []) 
console.log(data)


const recherche = (text) => {

  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e328b532f3c60b5f93231b4606d40400&language=fr&query=${text}`)
   .then((res) =>{
     setData(res.data);
     setGenrefilm(res.data.results)
     console.log(Genrefilm)
   })
   .catch((e) => console.log(e))
}
  return ( 
    <div>
   <Header />   
      <Div>
       <p>mama</p>
  <Span fluid icon='search' className="recherche"
  placeholder="chercher le titre d'un film" 
  className="inputrecherche" 
   />
  

    <div className="imputrecherche">
<input type="text" placeholder="faites les recherches de vos films" className="mr-sm-2" onChange={(e) =>recherche(e.target.value)} />
      {/* <Button variant="outline-success" onClick={recherche}>Search</Button> */}
      </div>
      <br />
   <br />
   <Grid className="gridsecondaire">
     <br />
   {Genrefilm.map((film) =>( 
      <Grid.Column mobile={8} tablet={4} computer={4} >
       <Card className="taillecard">

         <Link to={"/Details/"+ film.id}>  
      <Image className="photocarde" src={film.poster_path === null?"https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg":  "http://image.tmdb.org/t/p/w300" +film.poster_path } />
         </Link>
      <Card.Content>
        <Card.Header><h4>Film</h4></Card.Header> 
        <Card.Meta><h5>{film.title}</h5></Card.Meta>
      </Card.Content>

      </Card>
<br />
      </Grid.Column>
   ))}
    </Grid>
    
<div className="divpagination">
<Pagination
            boundaryRange={0}
            defaultActivePage={1}
            activePage={page}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            sidlingRange={1}
            totalPages={data.total_pages}
            onPageChange={(e, { activePage }) => {
                   setPage(activePage);
           
            }} /> 
</div>
</Div>
<Footer />
  </div>

)
  }

export default Genre