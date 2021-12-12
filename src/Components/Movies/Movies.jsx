const Movies = ({ movies, selectedMovies, setSelectedMovies }) => {
  const add = (idx) => {
    setSelectedMovies([...selectedMovies, movies[idx]]);
  };

  return (
    <>
      {movies.map((movie, idx) => {
        return (
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img src={movie.Poster} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">
                  Tip: {movie.Type} Godina: {movie.Year}
                </p>
                <button className="btn btn-primary" onClick={() => add(idx)}>
                  Dodaj u korpu
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Movies;
