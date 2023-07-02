import './App.css';
import About from './components/About';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="order online" element={<BookingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
