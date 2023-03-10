
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Orders from './components/orders/Orders'
import Add from './components/add/Add'
import Login from './components/log_in/Log_in.jsx'

function App() {
  return (
    <div className="App">
     
      <Navigation />
     
    <Routes >
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/orders' element={<Orders></Orders>}></Route>
      <Route path='/add' element={<Add></Add>}></Route>
    </Routes> 

    </div>
  );
}

export default App;
