/**
 * This is the main App component for the virtual wardrobe application.
 * It imports two child components: TemperatureGraph and VirtualWardrobe.
 * 
 * Usage: <App />
 */

import './App.css';
// Component imports
import VirtualWardrobe from './components/Wardrobe/VirtualWardrobe';
import BacklogList from './components/Backlog/BacklogList';
import Thermometer from './components/Temperature/Thermometer';

// Images for backlog lists
import * as gameImages from './images/gamesImages/index';
import * as projectImages from './images/projectImages/index';
import * as bookImages from './images/bookImages/index';
import { imageDirectoryOrder as projectOrder, styleRight} from './images/projectImages/index';
import { imageDirectoryOrder as gameOrder, styleLeft} from './images/gamesImages/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>alexos</p>
        <Thermometer />
        {/* <TemperatureGraph /> */}
        <VirtualWardrobe />
        <BacklogList  imageDirectory={gameImages} name={"Games Backlog"} order={gameOrder} style={styleLeft}/>
        <BacklogList  imageDirectory={projectImages} name={"Projects"} order={projectOrder} style={styleRight}/>
        <BacklogList  imageDirectory={bookImages} name={"Books"} order={bookImages.bookOrder} style={bookImages.styleMiddle}/>
      </header>
    </div>
  );
}

export default App;

