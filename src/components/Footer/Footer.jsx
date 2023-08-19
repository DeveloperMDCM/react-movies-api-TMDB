const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 p-3 flex justify-center items-center ">
        <div className="flex">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-movie"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00b341"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 4l0 16"></path>
            <path d="M16 4l0 16"></path>
            <path d="M4 8l4 0"></path>
            <path d="M4 16l4 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M16 8l4 0"></path>
            <path d="M16 16l4 0"></path>
          </svg>
        <span className="text-green-500 font-bold mx-3 flex justify-center items-center">
          
          ReactMovies
        </span>
        </div>
        <div>

        <span className="text-white font-bold">MOISES-CANARIA</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
