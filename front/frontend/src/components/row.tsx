import React, { useState, useEffect } from "react";
import axios from "../axios";
import { fetchMovieUrl } from "../requests";
import "./row.css";
import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLarge: boolean;
}

interface Movie {
  id: string;
  poster_path: string;
  name: string;
  backdrop_path: string;
}

interface Options {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
}

const opts: Options = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const WrapYouTube: any = YouTube;

const baseUrl: string = "https://image.tmdb.org/t/p/original";
const Row: React.FC<RowProps> = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<String>("");

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  const handleClick = (movie: Movie): void => {
    const fetchMovie = async (): Promise<any> => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        const url = await axios.get(fetchMovieUrl(movie.id));
        if (url.data.results.length) {
          setTrailerUrl(url.data.results[0]?.key);
        } else {
          alert("デモ動画が見つかりませんでした。");
        }
      }
    };

    fetchMovie().catch((err) => console.log(err));
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie: Movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={
                isLarge
                  ? `${baseUrl}${movie.backdrop_path}`
                  : `${baseUrl}${movie.poster_path}`
              }
              alt={movie.name}
              className={`row__poster ${isLarge && "row__posterLarge"}`}
            />
          );
        })}
      </div>
      {trailerUrl && <WrapYouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
