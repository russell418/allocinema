import React, { useEffect, useState } from 'react'
import { Card, Grid, Image, Container, Button, Pagination, Input } from 'semantic-ui-react'
// import logop from '../images/logop.jpg'
import axios from 'axios'
import "../Assets/Cardestyle.scss"
import { Link } from 'react-router-dom';
 import Header from '../components/Header'
 import styled from 'styled-components'

//  import Pagination  from './Pagination'
//  import Headerdeux from '../components/Headerdeux'



const Div = styled.div`

   // background:  #e2cd0a;
//    background:  black;

//   height: 70px;
//   padding-top: 15px;
//   padding-left: 150px;
//   padding-right: 150px;
//   position: fixed;
//   z-index: 26;
//   width: 100%;
// `
const Span = styled(Input)`

// border: 2px solid red;
border-radius: 100px ;
// position: fixed;
// margin-bottom: 70px;
`

const Carde = () => {

  
  // const API_TOKEN = "e328b532f3c60b5f93231b4606d40400"
const [cinema, setCinema] = useState([]);
const [data, setData] = useState([]);
const [page, setPage] = useState(1);


useEffect(() =>{
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e328b532f3c60b5f93231b4606d40400&language=en-US&page=1&page=${page}`)
 .then((res) => {
   setData(res.data);
   setCinema(res.data.results)
   console.log(cinema)
 })
 .catch((e) => console.log(e))
}, [page]) 
console.log(data)


const recherche = (text) => {

  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e328b532f3c60b5f93231b4606d40400&language=fr&query=${text}`)
   .then((res) =>{
     setData(res.data);
     setCinema(res.data.results)
     console.log(cinema)
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
  
   </Div>
    <div className="imputrecherche">
<input type="text" className="inputlongeur" placeholder="faites les recherches de vos films"  onChange={(e) =>recherche(e.target.value)} />
      {/* <Button variant="outline-success" onClick={recherche}>Search</Button> */}
      </div>
      <br />
   <br />
   <div className="cardeconteneur">
   {cinema.map((film) =>( 
      <Card className="taillecard">

         <Link to={"/Details/"+ film.id}>  
      <Image className="photocarde" src={film.poster_path === null?"https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg":  "http://image.tmdb.org/t/p/w300" +film.poster_path } />
         </Link>
      <Card.Content>
        <Card.Header><h4>Film</h4></Card.Header>
      


   <Card.Meta><h5>{film.title}</h5></Card.Meta>
      </Card.Content>
    </Card>
    ))}
 
     
     {/* </div>  */}
</div>
<Pagination
            defaultActivePage={1}
            activePage={page}
            totalPages={data.total_pages}
            onPageChange={(e, { activePage }) => {
                setPage(activePage);
            //   window.scrollTo(0, 0);
            }} />
<div>


  
</div>

  </div>

)
  }

export default Carde