import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import CinemaDetails from './pages/CinemaDetails';
import Cinemas from './pages/Cinemas';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import { auth } from './firebase';
import Protected from './hooks/Protected'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user)
    });
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header title={"Movies App"}></Header>
        <Routes>
          <Route index element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cinemas/:cinemaId" element={
            <Protected isLoggedIn={isLoggedIn}>
              <CinemaDetails />
            </Protected>
          }></Route>
          <Route path="/cinemas" element={
            <Protected isLoggedIn={isLoggedIn}>
              <Cinemas />
            </Protected>
          }></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
