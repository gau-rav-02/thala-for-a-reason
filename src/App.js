import { useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from 'react-share'
import { FaTwitter, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Card from './components/Card';
import PopupCard from './components/PopupCard';
import { PopupContext } from './context/popup'

function App() {

  const popupvalue = useContext(PopupContext);
    
  return (
    <div className="App">
      <h1 className='heading'>Everything happens for a reason &#128526; !</h1>
      <Card />
      <PopupCard trigger={popupvalue.value}/>
      <div className='social-links'>
        <a href="https://twitter.com/GLokhande02" style={{color: 'black'}} ><FaTwitter /></a>
        <a href="https://github.com/gau-rav-02" style={{color: 'black'}} ><FaGithubSquare /></a>
        <a href="https://linkedin.com/in/gaurav-lokhande-403134242" style={{color: 'black'}} ><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default App;
