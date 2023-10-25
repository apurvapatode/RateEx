import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Converter from './Converter';
import Chart from './Chart';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/converter' component={Converter}/>
      <Route path='/charts' component={Chart} />
      <Route render={() => <h1>404 Not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
