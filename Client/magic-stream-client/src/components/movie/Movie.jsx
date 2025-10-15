import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "./Movie.css";

const Movie = ({ movie, updateMovieReview }) => {
  return <div className="movie-card">
  <div className="movie-image-container">
    <img
      src={movie.poster_path}
      alt={movie.title}
      className="movie-poster"
    />
    <span className="play-icon-overlay">
      <FontAwesomeIcon icon={faCirclePlay} />
    </span>
  </div>

  <div className="movie-info text-center">
    <h5 className="movie-title mb-1">{movie.title}</h5>
    <p className="movie-id text-secondary mb-2">{movie.imdb_id}</p>

    {movie.ranking?.ranking_name && (
      <span className="badge bg-dark text-light mb-2">
        {movie.ranking.ranking_name}
      </span>
    )}

    {updateMovieReview && (
      <Button
        variant="outline-danger"
        onClick={(e) => {
          e.preventDefault();
          updateMovieReview(movie.imdb_id);
        }}
        className="review-btn"
      >
        Review
      </Button>
    )}
  </div>
</div>

};

export default Movie;
