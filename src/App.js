import './App.css';
import About from './components/About';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import pages from './components/pages';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route 
            path={pages.get('about').path} 
            element={<About />} 
          />
          <Route 
            path={pages.get('menu').path} 
            element={<Menu />} 
          />
          <Route path={pages.get('bookingpage').path} element={<BookingPage />} />
          {/* <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('orderOnline').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('login').path} 
            element={<UnderConstruction />} 
          />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
