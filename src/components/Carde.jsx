import React, { useEffect, useState } from 'react'
import { Card, Grid, Image, Container, Button, Pagination, Input } from 'semantic-ui-react'
// import logop from '../images/logop.jpg'
import axios from 'axios'
import "../Assets/Cardestyle.scss"
import { Link } from 'react-router-dom';
 import Header from '../components/Header'
 import styled from 'styled-components'
//  import Font from '../components/Font'


const Div = styled.div`

.gridsecondaire{
    background: #0A1233;
  // padding-left: 7%;
  // width: 90%;
   padding-left: 10%;
   padding-right: 7%;
   margin-top: 20px;
   padding-top: 10px;
  //  height: 820px;
}
.divpagination{
  text-align: center;
}




@media screen and (max-width: 411px){
  .gridsecondaire{
     background: #091322;
  //  padding-left: 10px;
      // width: 100%;
    //  padding-left: 60px;
    // padding-right: 7%;
    margin-top: 60px;
    padding-top: 10px;
    // margin-right: 20px;
    text-align: center;
 }
 .divpagination{
  // width: 70% !important;
  // margin-right: 30%;
  text-align: center;
}
.taillecard{
  width: 280px !important;
  height: 370px !important;
  
  // border: 1px solid red;
}
.imputrecherche{
  height: 60px;
  width: 100%;
  position: fixed;
  margin-bottom: 70px;
  // z-index: 5;
  background: #091322;
  // margin-bottom: 25px;
}
input{
  width: 90%;
  margin-left: 20px;
  // margin-right: 170px;
  border-radius: 60px;
  height: 40px;
   margin-top: 10px;
  // z-index: 3;
}
.taillecard{
  width: 340px !important;
  height: 350px !important;
  // border: 1px solid red;
}
}




@media screen and (max-width: 360px){
  .gridsecondaire{
    background: #091322;
  // padding-left: 7%;
    // width: 100% !important;
   //  padding-left: 10px;
   // padding-right: 7%;
   margin-top: 60px;
   padding-top: 10px;
}
.divpagination{
 // width: 70% !important;
 // margin-right: 30%;
 text-align: center;
}
.taillecard{
 width: 280px !important;
 height: 370px !important;
 // border: 1px solid red;
}
.imputrecherche{
 height: 60px;
 width: 100%;
 position: fixed;
 margin-bottom: 70px;
 z-index: 5;
 background: #091322;
 margin-bottom: 25px;
}

}
  `
const Span = styled(Input)`

border-radius: 100px ;
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
  
  
    <div className="imputrecherche">
<input type="text" className="inputlongeur" placeholder="faites les recherches de vos films"  onChange={(e) =>recherche(e.target.value)} />
      {/* <Button variant="outline-success" onClick={recherche}>Search</Button> */}
      </div>
        {/* <br />
   <br /> */}
   {/* <div > */}

  

   <Grid className="gridsecondaire">
     
   {cinema.map((film) =>( 
      <Grid.Column mobile={16} tablet={4} computer={4} >
       <Card className="taillecard">

<Link to={"/Details/"+ film.id}>  
<Image className="photocarde" src={film.poster_path === null?"https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg":  "http://image.tmdb.org/t/p/w300" +film.poster_path } />
</Link>
<Card.Content >
<Card.Header><h4>Film</h4></Card.Header>
<Card.Meta><h5>{film.title}</h5></Card.Meta>
</Card.Content>

</Card>
<br />
      </Grid.Column>
   ))}
  
    </Grid>


{/* </div> */}



<div className="divpagination">
<Pagination
            // defaultActivePage={1}
            // activePage={page}
            // totalPages={data.total_pages}
            // onPageChange={(e, { activePage }) => {
            //     setPage(activePage);
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
            }}
            /> 
</div>
</Div>
  </div>

)
  }

export default Carde