/**
 * This is the main App component for the virtual wardrobe application.
 * It imports two child components: TemperatureGraph and VirtualWardrobe.
 * 
 * Usage: <App />
 */

import './App.css';
import TemperatureGraph from './Graphs/TemperatureGraph';
import VirtualWardrobe from './Wardrobe/VirtualWardrobe';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        // alexos
        <TemperatureGraph />
        <VirtualWardrobe />
      </header>
    </div>
  );
}

export default App;

