import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import {
   Routes,
  Route,

} from 'react-router-dom';
import Converter from './Converter';
import Chart from './Chart';


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/converter' element={<Converter/>}/>
      <Route path='/charts' element={<Chart/>} />
    </Routes>
  );
}

export default App;
