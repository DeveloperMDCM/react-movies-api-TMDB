import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
// import PrivateRoute from "./components/PrivateRoute";
// import useAuth from "./hooks/useAuth";
import Movie from "./pages/movieDetail/movie";
import Error from "./pages/Error";
import MoviesList from "./components/MoviesList";
function App() {
  // const isAuthenticated = useAuth();
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          {
            <>
              <Route index element={<Index />} />
              <Route path="/movie/:id"  element={<Movie />} />
              <Route path="/movies/:type"  element={<MoviesList />} />
              {/* <Route path="/register" element={<Register />} />
              <Route path="/customer" element={<Personas />} /> */}
              <Route path="*" element={<Error />} />
            </>
          }
        </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
