import './App.css';
import Header from './Component/Header';
import Intro from './Component/Intro';
import Profile from './Component/Profile';
import Strength from './Component/Strength';
import Activity from './Component/Activity';
import Footer from './Component/Footer';
import Favorite from './Component/Favorite';

function App() {
  return (
    <div className='body'>
      <Header></Header>
      <Intro></Intro>
      <Profile></Profile>
      <Strength></Strength>
      <div id="activity_title">My Activity</div>
      <Activity></Activity>
      <Favorite></Favorite>
    </div>
  );
}

export default App;
