import React, {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import { setMapScriptLoadedHnd } from './Tools/Configuration/configurationHandler';
import Location from './Components/Location/Location';
const mapTk = 'AIzaSyC4s13ZpukZUK_juf6U5KnHwOHCfa8H6pM'

const loadScript = (url) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  const head = document.querySelector('head');
  head.appendChild(script);
  return new Promise(resolve => {
      script.onload = resolve;
  });
}

function App() {

  window.setMapScriptLoadedCb = () => {
    setMapScriptLoadedHnd(true);
  }

  useEffect(() => {
    if (!window.google){
      loadScript(`https://maps.googleapis.com/maps/api/js?v=3&key=${mapTk}&loading=async&callback=setMapScriptLoadedCb`)
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Location></Location>
    </div>
  );
}

export default App;