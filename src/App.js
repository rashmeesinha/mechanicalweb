import Navbar from './Navbar/Navbar';
import './App.css';
//import Section from './Section1/Section'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer'
import Contact from './Contact/Contact';
import bundleArray from './Blogs/bundleArray'
import jstheory from './Blogs/jstheory';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' index element={<Blogs bundleArray={bundleArray} pagesize={5}/>}></Route>
        <Route path='/jstheory' element={<Blogs bundleArray={jstheory} pagesize={5}/>}></Route>
          <Route path='/jscoding' element={<Blogs bundleArray={bundleArray} pagesize={5}/>}></Route>
          <Route path='/contactUs'exact element={<Contact/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;