import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Signup from './components/SignUpAndSignIn'
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Signup}/>
        <Route path="/dashboard" component={Dashboard} /> 

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
