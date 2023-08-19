import React, { useEffect, useState } from "react";
import './movie.css'
import { useParams } from 'react-router-dom'
import NavBar from "../../components/NavBar";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Spinner } from "../../components/Spinner/Spinner";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
const Movie = () => {
  const [currentMovieDetail, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actores, setActores] = useState([]);
  const { id } = useParams()
  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es`)
      const data = await response.json();
      setActores(data.cast);
      console.log(actores);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
    fetchMovies()
    window.scrollTo(0,0)
  }, [])

  const getData = async () => {
    try {
      await  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es`)
        .then(res => res.json())
        .then(data => setMovie(data))
        setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
 
  return (
  <>
  <NavBar />
  
  
  {loading ? <div className="flex justify-center">
      <Spinner />
      <div className='actores'>
        <SkeletonTheme 
         baseColor="#202020" highlightColor="#444">
          <Skeleton 
            height={300} 
            duration={0.5} 
          />
        </SkeletonTheme>
      </div>

      </div> : 
    <>
     {/* <h1 className="text-green-500 font-bold text-3xl text-center mb-1">Actores</h1> */}
      <ScrollingCarousel show={5} slide={2} transition={0.5} swiping={true}>
        <div className="flex mt-2">
          
{
  actores.map((movie, index) => (
    <>
   <div key={index} class="actores">
        <ul role="list"  class="divide-y mx-1  divide-gray-700">
            <li class=" bg-gray-800 p-2 rounded-md">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class=" w-14 h-14 rounded-full" src={movie.profile_path ? `http://image.tmdb.org/t/p/w780/${movie.profile_path}` : '/vite.svg'} alt="Neil image" />
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {movie.original_name}
                        </p>
                        {/* <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {movie.original_name}
                        </p> */}
                    </div>
                </div>
            </li>
         
          
        </ul>
   </div>

    </>
  ))
}
        </div>
</ScrollingCarousel>
    <div className="flex flex-wrap justify-center relative w-full">
      <div className="flex justify-center">

    <img 
          className="  hidden sm:w-3/4 sm:block mt-4 border-4 shadow-lg blur-sm sm:blur-0  shadow-green-500 rounded-md" 
          src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}
          alt="movie backdrop" 
        />
      </div>
        <div className="absolute background_movie_info bg-transparent mt-2 lg:bg-sombra  rounded-md  top-0 sm:top-20 justify-center flex md:whitespace-nowrap flex-wrap   items-center">
          <div className="">
          <img 
          className=" shadow-lg  rounded-md background_movie_info2 shadow-green-400" width={350} 
          src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}
          alt="movie backdrop" 
          />
          </div>
          <div className="font-bold text-white -my-5 mx-3 text-md md:text-4xl flex flex-col bg-gray-800 rounded-md p-2">
            
            <span className=" text-md "> {currentMovieDetail ? currentMovieDetail.original_title : ""}</span>
            <div className="mt-3">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="text-sm">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="text-sm">
              {currentMovieDetail ? currentMovieDetail.release_date : ""}
            </div>
            <div className="flex mt-2 items-center text-sm flex-wrap">
              {currentMovieDetail && currentMovieDetail.genres
                ? 
                  currentMovieDetail.genres.map(genre => (
                    <span 
                      key={genre.id}
                      className="p-2 border-2 rounded-md m-2 flex justify-center"
                      id={genre.id}
                    >
                      {genre.name}
                    </span>
                  )) 
                : ""
              }
              
            </div>
            <div className="movie__rating bg-green-500 flex justify-center items-center  mt-3">
              {currentMovieDetail ? currentMovieDetail.vote_average: ""} 
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff0" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor" />
          </svg>
              <span className="movie__voteCount">
                {currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votos" : ""}
                
              </span>
            </div>  
           
            {/* <div className="">
              Synopsis
            </div>
            <div className=" ">{currentMovieDetail ? currentMovieDetail.overview : ""}</div> */}
          </div> 
          {

            loading ? <div className="flex justify-center">
            <Spinner />
            </div>
            : <>
            <iframe className=" w-2/3 sm:w-96  sm:h-80 mt-6 mx-3"
              allowFullScreen
              scrolling="no"
              sandbox="allow-scripts allow-same-origin allow-forms"
              src={`https://multiembed.mov/?video_id=${currentMovieDetail.id}&tmdb=1`} >
                
              </iframe>
            </>
            
          }
        </div>
    </div>
    <div>

</div>

   
    </>
  }

  </>  
  )
}

export default Movie;