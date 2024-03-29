import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/landing_page';
import TodayCalls from './components/pages/today_calls';
import TodayCallsPage from './components/pages/TodayCallsPage';
import LoginPage from'./components/pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/login" element={<LoginPage/>} /> */}
      <Route path="/" element={<LandingPage/>} />
      <Route path="/TodayCalls" element={<TodayCalls/>} />
      <Route path="/TodayCallsPage" element={<TodayCallsPage/>} />
      <Route path="/LoginPage" element={<LoginPage/>} />
    
    
    
      
      </Routes>
    </Router>
  );
}

export default App;