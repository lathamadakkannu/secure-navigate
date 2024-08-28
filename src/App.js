//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Veg from './Veg';
import Nonveg from './Nonveg';
import Product from './Product';
import Filter from './Filter';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">                                                                                                               

      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="login" element={<Login/>}/>
        <Route  path="dash" element={<Dashboard/>}/>
        <Route path="product/:id" element={<Product/>} />
        <Route path="filter" element={<Filter/>}/>

        <Route path='/food  '>
          <Route path='veg' element={<Veg/>}/>
          <Route path='nonveg' element={<Nonveg/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
