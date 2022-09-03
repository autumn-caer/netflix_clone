import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";
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

const baseUrl: string = "https://image.tmdb.org/t/p/original";
const Row: React.FC<RowProps> = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };

    fetchData().catch((err) => console.log(err));
  }, []);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie: Movie) => {
          return (
            <img
              key={movie.id}
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
    </div>
  );
};

export default Row;
