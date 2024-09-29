import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewUser from './newUser'; // Your home component or other components
import Home from './homePage';
import Found from './userfound'; 
import AddRate from './AddRate';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newUser" element={<NewUser/>} />
        <Route path="/userFound" element={<Found/>} />
        <Route path= "/addRating" element={<AddRate />} />
        <Route path="/homepage" element={<Home />} />
        



        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;

