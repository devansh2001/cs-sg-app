import logo from './logo.svg';
import './App.css';
import SortingActivity from './components/SortingActivity';
import LoopsActivity from './components/LoopsActivity';
import VariablesActivity from './components/VariableActivity'
import ConditionalActivity from './components/ConditionalActivity'
import { Router, Route, browserHistory } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router history={browserHistory} >

          <Route path='/' component={() => <VariablesActivity/>} />

          <Route path='/conditional' component={() => <ConditionalActivity/>} />
          
          <Route path='/loops' component={() => <LoopsActivity/>} />

          <Route path='/sorting' component={() => <SortingActivity/>} />
          
      </Router>
    </div>
  );
}

export default App;
