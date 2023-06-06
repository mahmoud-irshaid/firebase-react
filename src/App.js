import Auth from './components/auth';
import { db } from "./config/firebase-config"
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const [movieList, setmovieList] = useState([])

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      // read Data
      //set the movie list 
      try {
        const data = await getDocs(moviesCollectionRef)
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        console.log(filteredData);
        setmovieList(filteredData)
      } catch (error) {
        throw new Error(error)
      }
    }
    getMovieList()

    return () => {
    }
  }, [])



  return (
    <div className="App">
      <Auth />





      <div>
        {movieList.map((i) => <div>
          <h4>{i.title}</h4>
          <p>Date: {i.releaseDate}</p>
          <p>got oscar: {i.Oscar ? 'yes' : 'No'}</p>
        </div>)}
      </div>
    </div>
  );
}

export default App;
