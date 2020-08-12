import React, { useState, useEffect } from "react";
import ListesFilms from "../components/ListesFilms";
import { Pagination as RPagination, Icon } from "semantic-ui-react";
// import themoviedb from "../services/api/api.themoviedb";
export default function Pagination() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular/?api_key=e328b532f3c60b5f93231b4606d40400&language=fr&query=${page}`)
      .then((response) => {
        setMovies(response.data);
     
      })
      .catch((e) => {
        console.log("une erreure est survenue");
      });
  }, [page]);
  console.log(movies)
  return <div>
      <ListesFilms dataMovies={movies.results ? movies.results : []} />
      <RPagination
            defaultActivePage={1}
            activePage={paginnation}
            totalPages={data.total_pages}
            onPageChange={(e, { activePage }) => {
                setPage(activePage);
            //   window.scrollTo(0, 0);
            }}
          />
  </div>;
}
  