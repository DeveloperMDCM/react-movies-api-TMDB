
import { useState, useEffect } from "react"
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Cards from "./Card/Card";
import NavBar from "./NavBar";
import Categories from "./Categories/Categories";
import { Spinner } from "./Spinner/Spinner";
import { useParams } from "react-router-dom";
import Footer from "./Footer/Footer";
// import { Carousel } from '@trendyol-js/react-carousel'
import Slider from "./SliderHome/Slider";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Card/Card.css"
export let pages = 1;
const MoviesList = () => {
  const [moviesList, setMoviesList] = useState([])
  const [moviesSlider, setMoviesSlider] = useState([])
  const [loading, setLoading] = useState(true);
  let [page, setPage] = useState(1)
  const { type } = useParams();
  // const { page } = useParams()
  // console.log(page);
  useEffect(()=> {
    fetchMovies()

  },[type])

  

  const fetchMovies = async (page) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_MOVIES_URL}${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es&page=${page}`)
      const data = await response.json();
      setMoviesList(page > 1 ?  preveMovies => preveMovies.concat(data.results) : data.results);
      setMoviesSlider(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <>
   <NavBar />
   <Carousel   showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}   >
   {
        moviesSlider.map((movie, index) => (
          <Slider 
            key={index} 
            movie={movie} 
          />
        ))
      }
      </Carousel>
      <h2 className="text-green-500 font-bold text-2xl text-center p-3">{`${(type === 'popular' ? 'Popular' : type === 'top_rated' ? 'Top' : type === 'upcoming' ? 'Extrenos' : 'popular').toUpperCase()}`}</h2>
    <div>
    {/* <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2> */}

    {
      loading ? <>
      <div className="flex justify-center">
      <Spinner />

      </div>
      </> : 
    <>
    <div className="flex gap-2 flex-wrap justify-center bg-black">
      {
        moviesList.map((movie, index) => (
          <Cards 
            key={index} 
            movie={movie} 
          />
        ))
      }
    </div>
    <div className="flex justify-center bg-black">

  <button onClick={() => {
    setPage(++page)
    fetchMovies(page);
  }} className="p-3 w-1/2   font-bold text-md border-t-2 mb-2 text-center text-white bg-green-500 hover:bg-gray-800 rounded-md">
    <span className="flex justify-center items-center whitespace-nowrap">
    Cargar más 
      </span> 
  </button>
    </div>
    </>
      }
  </div>
  <Footer />
    </>
  )
}

export default MoviesList