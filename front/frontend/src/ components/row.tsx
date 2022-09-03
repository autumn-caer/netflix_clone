import React, { useEffect } from "react";
import axios from "../axios";

interface RowProps {
  title: string;
  fetchUrl: string;
}

const Row: React.FC<RowProps> = ({ title, fetchUrl }) => {
  // const [movies, setMovies] = useState<Array<string>>([]);

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    };

    const s = fetchData();
    console.log(s);
  }, []);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
