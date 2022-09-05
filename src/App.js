import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/My-Profile';
import Dragons from './components/Dragons';
import MissionList from './components/Missions/MissionList';
import Rockets from './components/rockets/rockets';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/missions" element={<MissionList />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
