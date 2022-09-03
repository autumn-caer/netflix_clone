import React, { useState, useEffect } from "react";
import axios from "../axios";

interface RowProps {
  title: string;
  fetchUrl: string;
}

interface Movie {
  id: string;
  poster_path: string;
  name: string;
}

const baseUrl: string = "https://image.tmdb.org/t/p/original";
const Row: React.FC<RowProps> = ({ title, fetchUrl }) => {
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
    <div>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie: Movie) => {
          return (
            <img
              key={movie.id}
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
