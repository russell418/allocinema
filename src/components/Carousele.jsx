import React,{useEffect, useState} from 'react'
import { Carousel} from 'react-bootstrap'
import axios from 'axios'

import styled from 'styled-components'

// import logo from "../image/logo.png";
// import avantar2 from "../image/avantar2.jpg";
// import seigneurdesanneaux from "../image/seigneurdesanneaux.jpg";
// import alienne from "../image/alienne.jpeg";

const Div = styled.div`

.taille{
  height: 450px;
  width: 100%;
}
.tailleimage{
  height: 450px;
  width: 100%;
}
// .photocarousel{
//   width: 100%;
//   height: 700px;
// }

`

const Carousele = () => {

    const [carouseln, setCarouseln] = useState([]);
    const [data, setData] = useState([]);
    // const [page, setPage] = useState(1);
    
    
    useEffect(() =>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e328b532f3c60b5f93231b4606d40400&language=en-US&page=1`)
     .then((res) => {
       setData(res.data);
       setCarouseln(res.data.results)
       console.log(carouseln)
     })
     .catch((e) => console.log(e))
    }, []) 
    console.log(data)


  return <Div>
  <Carousel className="taille">
  {carouseln.slice(5,8).map((film) =>( 
  <Carousel.Item>
  <img className="photocarousel" src={"http://image.tmdb.org/t/p/w300" +film.poster_path}/>
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  ))}
</Carousel>
</Div>
    ;
  }
  

  export default Carousele