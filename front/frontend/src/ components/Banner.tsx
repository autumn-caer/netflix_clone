import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Banner.css";
interface BannerProps {
  fetchUrl: string;
}

interface Movie {
  id: string;
  poster_path: string;
  name: string;
  backdrop_path: string;
  original_name: string;
  title: string;
  overview: string;
}

const baseUrl: string = "https://image.tmdb.org/t/p/original";
const Banner: React.FC<BannerProps> = ({ fetchUrl }) => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const request = await axios.get(fetchUrl);

      const targetMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      console.log(targetMovie);
      setMovie(targetMovie);
    };

    fetchData().catch((err) => console.log(err));
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${baseUrl}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title ?? movie?.name ?? movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
