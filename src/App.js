import { useEffect, useState } from "react";
import Loading from './component/loading/loading.component';
import Tours from "./component/tours/tours.component";

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState({});

  const fetchTours = async() => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } 
  }

  useEffect(() => {
    fetchTours();
  });

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} />
      </main>
    );
  }
}

export default App;
