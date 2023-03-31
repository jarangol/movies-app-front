import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App">
      <Header title={"Movies App"}></Header>
      <BrowserRouter>
        <Routes>
            <Route index element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
