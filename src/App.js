import {BrowserRouter,Switch} from 'react-router-dom'
import Signup from './components/SignUpAndSignIn'
import PublicRoute from './components/PublicRoute';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Signup}/>
        <ProtectedRoute  path="/dashboard" component={Dashboard} /> 
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
