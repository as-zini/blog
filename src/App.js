import './App.css';
import Header from './Component/Header';
import Intro from './Component/Intro';
import Profile from './Component/Profile';
import Strength from './Component/Strength';
import Activity from './Component/Activity';
import Footer from './Component/Footer';
import Favorite from './Component/Favorite';
import { createContext } from 'react';
import { AuthContext } from './store/authContext';
import { useState } from 'react';
import Login_component from './Component/Log_in';
import Home from './Component/Home';
import Posting from '../src/Routes/Posting'
import Posts from './Routes/Posts';
import useStore from './store/store';

export const AppContext = createContext();
      
function App() {
  // const [isLogin , setIsLogin] = useState(false);
  const isLogin = useStore((state) => state.isLogin)
  // const login = useStore((state) => state.login)
  const [isPosting, setIsPosting] = useState(false);

  return (
    <div isLogin = {isLogin}>
      <div className='body'>
        <Header setIsPosting = {setIsPosting} ></Header>
        { isLogin ? <>
          {isPosting ? <Posting setIsPosting = {setIsPosting} isPosting = {isPosting} ></Posting> : <Posts></Posts>}
        </> : <Login_component></Login_component> }
      </div>
    </div>
  );
}

export default App;
