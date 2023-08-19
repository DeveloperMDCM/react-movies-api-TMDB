import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./Slider.css"
import { Link } from 'react-router-dom'


const Slider = ({movie}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return <> 
  
    {
      isLoading 
      ?
      <div className='posterImage'>
        <SkeletonTheme 
         baseColor="#202020" highlightColor="#444">
          <Skeleton 
            height={400} 
            duration={1} 
          />
        </SkeletonTheme>
      </div>
    :
   <>
  
  <Link
                key={movie.id}
                style={{textDecoration:"none",color:"white"}} 
                to={`/movie/${movie.id}`}
              > 
                <div className='posterImage relative'>
                  <img 
                    src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} 
                    alt='movie backdrop'
                  />
                <div className='posterImage__overlay '>
                  <div className='text-3xl sm:text-5xl font-bold shadow-2xl p-3 shadow-black border-2 rounded-md text-white m-auto text-center '>{movie ? movie.original_title: ""}</div>
                    <div>

                  <div className='text-3xl font-bold'>
                    <span className="absolute bottom-12 right-0 left-9 flex flex-col justify-center items-center font-bold w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-red-500">
                       <span className=' text-sm sm:text-3xl'>⭐<br />{movie ? movie.vote_average: ""}</span>
                      </span>
                  <span className='absolute bottom-1 shadow-md rounded-md text-sm  bg-red-500 p-2  left-7 font-bold text-white'> {movie ? movie.release_date: ""}  </span>
                
                  </div>
                    </div>
                </div> 
                </div>
              
              </Link>
    
   </>
    }
  </>
}

export default Slider;