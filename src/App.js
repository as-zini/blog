import './App.css';
import Header from './Component/Header';
import Intro from './Component/Intro';
import Profile from './Component/Profile';
import Strength from './Component/Strength';
import Activity from './Component/Activity';
import Footer from './Component/Footer';
import Favorite from './Component/Favorite';
import { createContext } from 'react';

export const AppContext = createContext();

const dark = {
  darkMode: "true",
}

function App() {

  

  return (
    <AppContext.Provider value={dark}>
      <div className='body'>
        <Header></Header>
        <Intro></Intro>
        <Profile></Profile>
        <Strength></Strength>
        <div id="activity_title">My Activity</div>
        <Activity></Activity>
        <Favorite></Favorite>
      </div>
    </AppContext.Provider>
  );
}

export default App;
