import { useEffect, useState } from "react";
import CinemasList from "../components/CinemasList";

const Cinemas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cinemas, setCinemas] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://192.168.64.2:31003/cinemas")
        .catch(() => setError(true))
      setIsLoading(false)
      setError(!data.ok)
      if (data.ok) {
        const cinemas = await data.json();
        setCinemas(cinemas);
      }
    }

    fetchData()
  }, []);

  return (
    <>
      { isLoading ? <h1>Loading...</h1> :
        error ? <h1>"Ups! Something went wrong."</h1> :
        <>
          <h3>Cinemas</h3>
          <CinemasList cinemas={cinemas}></CinemasList>
        </>
      }
    </>
  );
}

export default Cinemas;