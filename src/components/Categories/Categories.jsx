import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import "./card.css"
import { Link } from 'react-router-dom'


const Categories = ({categori}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return <> 
  <div className='flex justify-center'>

    {
      isLoading 
      ?
      <div className='Categories'>
        <SkeletonTheme 
          color= "#202020"
          highlightColor='#444'>
          
        </SkeletonTheme>
      </div>
    :
        
     <>
      <span className="hover:text-green-500 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap cursor-pointer w-full">
        {categori.name}
      </span>
     </>
   
    }
  </div>
  </>
}

export default Categories;