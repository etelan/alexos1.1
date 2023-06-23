/**
 * This is the main App component for the virtual wardrobe application.
 * It imports two child components: TemperatureGraph and VirtualWardrobe.
 * 
 * Usage: <App />
 */

import './App.css';
import TemperatureGraph from './components/TemperatureGraph/TemperatureGraph';
import VirtualWardrobe from './components/Wardrobe/VirtualWardrobe';
import BacklogList from './components/Backlog/BacklogList';

import * as gameImages from './images/gamesImages/index';
import * as projectImages from './images/projectImages/index';


const styleLeft = {
  position: 'fixed',
  bottom: '0',
  left: '0',
  width: '400px',
  marginLeft: '20px',
  marginBottom: '20px',
}

const styleRight = {
  position: 'fixed',
  bottom: '0',
  right: '0',
  width: '400px',
  marginRight: '20px',
  marginBottom: '20px',
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>alexos</p>
        <TemperatureGraph />
        <VirtualWardrobe />
        <BacklogList  imageDirectory={gameImages} name={"Games Backlog"} order={[2,1,0,3,4,5]} style={styleLeft}/>
        <BacklogList  imageDirectory={projectImages} name={"Projects"} order={[2,1,0,3,4,5]} style={styleRight}/>
      </header>
    </div>
  );
}

export default App;

