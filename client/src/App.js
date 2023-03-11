import './App.css';
import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Orders from './components/orders/Orders'
import Add from './components/add/Add'
import Login from './components/log_in/Log_in.jsx'
import { useSelector } from 'react-redux'
 

export default function App() {
  const login = useSelector((state) => state.logIn)
  const navigate = useNavigate();
  return ( 
  <div className = "App" >
    <Navigation /> 
      
        < Routes >
      <Route path = '/login'element = {< Login /> } /> 
      < Route path = '/orders' element = {< Orders />} />
      <Route path = '/add' element = {< Add /> } /> 
        </Routes> 

            </div>
          );
        }

         