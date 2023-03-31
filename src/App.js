import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title={"Movies App"}></Header>
        <Routes>
            <Route index element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
