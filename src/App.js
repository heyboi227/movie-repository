import { useState, useEffect } from 'react';
import Movies from './Components/Movies/Movies';
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';
import Selected from './Components/Selected/Selected';

const App = () => {
  const apiKey = "YOUR API KEY HERE";
  const [searchString, setSearchString] = useState("");
  const [movies, setMovie] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchString !== "") {
      fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchString}&page=${page}`)
        .then(res => res.json())
        .then(data => {
          setMovie(data.Search);
        })
        .catch(err => console.error(err));
    } else {
      setMovie([]);
    }
  }, [page, searchString, selectedMovies]);

  return (
    <>
      <Search setSearchString={setSearchString}></Search>

      <hr></hr>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <Movies movies={movies} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies}></Movies>
            </div>
          </div>
          <div className="col-md-4">
            <Selected selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies}></Selected>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="row g-3 mt-2">
        <Pagination page={page} setPage={setPage}></Pagination>
      </div>
    </>
  );
};

export default App;