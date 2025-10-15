import Movie from '../movie/Movie';

const Movies = ({ movies, updateMovieReview, message }) => {
  // ✅ Handle when movies is undefined, null, or not an array
  if (!Array.isArray(movies)) {
    return (
      <div className="container mt-4 text-center">
        <h2>{message || 'Loading movies...'}</h2>
      </div>
    );
  }
 
  

  return (
    <div className="container mt-4">
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie._id} className="col-md-4 mb-4">
              <Movie movie={movie} updateMovieReview={updateMovieReview} />
            </div>
          ))
        ) : (
          <h2 className="text-center w-100">{message || 'No movies found'}</h2>
        )}
      </div>
    </div>
  );
};

export default Movies;
