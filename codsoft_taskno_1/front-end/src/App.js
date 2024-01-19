import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SearchAJob from './pages/SearchAJob';
import PostAJob from './pages/PostAJob';
import Login from './pages/Login';
import SignUp from './pages/SignUp';





function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/searchajob" element={<SearchAJob />} />
          <Route path="/postajob" element={<PostAJob />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
