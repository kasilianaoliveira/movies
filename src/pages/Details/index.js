import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container } from "./style";

export const Details = () => {
  const { id } = useParams();
  const image_path = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, overview, poster_path, release_date } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        };
        console.log(movie);
        setMovie(movie);
      });
  }, [id]);
  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={`Imagem do filme: ${movie.sinopse}`} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Release date: {movie.releaseDate}
          </span>
          <Link to={`/`}>
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
