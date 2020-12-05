import logo from './logo.svg';
import Space from './Images/space.jpg';
import './App.css';
import LoopsActivity from './components/LoopsActivity';
import VariablesActivity from './components/VariableActivity';
import ConditionalActivity from './components/ConditionalActivity';
import SortingActivity from './components/SortingActivity';

function App() {
  return (
    <div 
      style={{
        backgroundImage: "url(" + Space + ")", 
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color: "white",
        overflow: "scroll"
      }}>
      <LoopsActivity/>
    </div>
  );
}

export default App;
