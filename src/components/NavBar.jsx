
import { Link } from "react-router-dom";
import Categories from "./Categories/Categories";
import { useState, useEffect } from "react";
import { pages } from "./MoviesList";
const NavBar = () => {
  const [categoriesList, setCategoriesList] = useState([])
  const [loading, setLoading] = useState(true);
  // const { page } = useParams()
  // console.log(page);
  useEffect(()=> {
    fetchCategories()
  },[])
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es')
      const data = await response.json();
      setCategoriesList(data.genres);
      // console.log(data.genres);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <>
      <nav className="  border-gray-600 bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto  p-2">
          <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-movie" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M8 4l0 16" />
        <path d="M16 4l0 16" />
        <path d="M4 8l4 0" />
        <path d="M4 16l4 0" />
        <path d="M4 12l16 0" />
        <path d="M16 8l4 0" />
        <path d="M16 16l4 0" />
        </svg>
        <h1 className="text-white flex justify-center items-center text-3xl">React<span className="text-green-500"> Movies</span></h1>
        {/* <span className="text-white">©</span>
        <span className="text-green-500 font-bold">MDCM</span> */}
        </div>
          <button onClick={() => {
                const menu = document.querySelector('#mega-menu-full');
                menu.classList.toggle('hidden');
          }} id="menu-button" data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-movie" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <path d="M8 4l0 16" />
                <path d="M16 4l0 16" />
                <path d="M4 8l4 0" />
                <path d="M4 16l4 0" />
                <path d="M4 12l16 0" />
                <path d="M16 8l4 0" />
                <path d="M16 16l4 0" />
                </svg>
          </button>
          <div className="  gap-2 bg-green-500 rounded-md p-2 items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">

<span className="text-white">DeveloperMDCM</span>

        </div>
          <div  id="mega-menu-full" className=" font-medium hidden w-full md:flex md:w-auto md:order-1">

              <ul className="flex flex-wrap mt-2 justify-center border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-900 ">
              <div className="flex flex-wrap justify-center items-center gap-2 ">
                <div class="dropdown inline-block relative">
                <Link to={"/"} className="text-green-500 font-semibold p-2 rounded inline-flex items-center">
                  inicio
                  </Link>
                </div>
                <div class="dropdown inline-block relative">
                  <button class=" text-green-500 font-semibold p-2 rounded inline-flex items-center">
                    <span class="mr-1">Peliculas</span>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                  </button>
                   <ul class="dropdown-menu z-10 border-t-2 absolute hidden text-green-700  bg-gray-900 ">
                    <li class="">
                    <Link to={"/movies/popular"} className="hover:text-green-500 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap">
                  Popular
                  </Link>
                    </li>
                    <li class="">
                    <Link to={"/movies/top_rated"} className="hover:text-green-500 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap">
                  Top
                  </Link>
                    </li>
                    <li class="">
                    <Link to={"/movies/upcoming"} className="hover:text-green-500 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap">
                  Extrenos
                  </Link>
                    </li>
                    <li>
                     <div class="dropdown2 inline-block relative">
                  <button class=" text-green-500 font-semibold p-2 rounded inline-flex items-center">
                    <span class="mr-1">Categorias</span>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                  </button>
                   <ul class="dropdown-menu2 z-10 border-t-2 absolute hidden text-green-700  w-full bg-gray-900">
                   <li class="text-sm">
                   
                    {
                          categoriesList.map((movie, index) => (
                            <Categories 
                              key={index} 
                              categori={movie} 
                            />
                          ))
                        }
                    </li>
                  </ul>
                </div>
                    </li>
                  </ul>

                </div>
                {/* <div class="dropdown inline-block relative">
                  <button class=" text-green-500 font-semibold p-2 rounded inline-flex items-center">
                    <span class="mr-1">Programas TV</span>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                  </button>
                  
                   <ul class="dropdown-menu z-10 border-t-2 absolute hidden text-green-700  bg-gray-900 ">
                    <li class="">
                    <Link to={"/"} className="hover:text-green-500 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap">
                  Popular
                  </Link>
                    </li>
                    <li class="">
                    <Link to={"/"} className="hover:text-green-500 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap">
                  Top
                  </Link>
                    </li>
                    <li class="">
                    <Link to={"/"} className="hover:text-green-500 hover:bg-gray-600 py-2 px-4 block whitespace-no-wrap">
                  Extrenos
                  </Link>
                    </li>
                    <li>
                     <div class="dropdown2 inline-block relative">
                  <button class=" text-green-500 font-semibold p-2 rounded inline-flex items-center">
                    <span class="mr-1">Categorias</span>
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                  </button>
                   <ul class="dropdown-menu2 z-10 border-t-2 absolute hidden text-green-700  w-full bg-gray-900">
                   <li class="text-sm">
                   
                    {
                          categoriesList.map((movie, index) => (
                            <Categories 
                              key={index} 
                              categori={movie} 
                            />
                          ))
                        }
                    </li>
                  </ul>
                </div>
                    </li>
                  </ul>

                </div> */}
            
            <div>
              
            </div>
            <div className="flex items-center cursor-pointer">

            <span className="text-sm font-bold  text-green-500"></span>
            <h2 className="text-white text-sm  font-bold hover:text-green-500">Source <span> Code</span></h2>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            </div>
            </div>
              </ul>
           
          </div>
      </div>
     
  </nav>
    </>
  )
}

export default NavBar