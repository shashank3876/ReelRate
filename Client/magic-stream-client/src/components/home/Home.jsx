// import {useState, useEffect} from 'react';
// import axiosClient from '../../api/axiosConfig'
// import Movies from '../movies/Movies';
// import Spinner from '../spinner/Spinner';

// const Home =({updateMovieReview}) => {
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(false)
//     const [message, setMessage] = useState();

//     useEffect(() => {
//         const fetchMovies = async () => {
//             setLoading(true);
//             setMessage("");
//             try{
//                 const response = await axiosClient.get('/movies');
//                 setMovies(response.data);
//                 if (response.data.length === 0){
//                     setMessage('There are currently no movies available')
//                 }

//             }catch(error){
//                 console.error('Error fetching movies:', error)
//                 setMessage("Error fetching movies")
//             }finally{
//                 setLoading(false)
//             }
//         }
//         fetchMovies();
//     }, []);

//     return (
//         <>
//             {loading ? (
//                 <Spinner/>
//             ):  (
//                 <Movies movies ={movies} updateMovieReview={updateMovieReview} message ={message}/>
//             )}
//         </>

//     );

// };

// export default Home;




import { useState, useEffect } from "react";
import axiosClient from "../../api/axiosConfig";
import Movies from "../movies/Movies";
import Spinner from "../spinner/Spinner";

const Home = ({ updateMovieReview }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setMessage("");

      try {
        const { data } = await axiosClient.get("/movies");
        setMovies(data);

        if (data.length === 0) {
          setMessage("🎬 No movies available right now. Check back soon!");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMessage("⚠️ Unable to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-8">
      {loading ? (
        <Spinner />
      ) : message ? (
        <div className="text-center text-gray-300 text-lg font-medium animate-fade-in">
          {message}
        </div>
      ) : (
        <div className="w-full max-w-7xl animate-fade-in">
          <Movies movies={movies} updateMovieReview={updateMovieReview} />
        </div>
      )}
    </div>
  );
};

export default Home;
