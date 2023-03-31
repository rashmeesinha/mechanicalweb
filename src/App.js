import Navbar from './Navbar/Navbar';
import './App.css';
//import Section from './Section1/Section'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer'
import Contact from './Contact/Contact';
import bundleArray from './Blogs/bundleArray'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' index element={<Blogs bundleArray={bundleArray}/>}></Route>
          <Route path='/contactUs'exact element={<Contact/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;