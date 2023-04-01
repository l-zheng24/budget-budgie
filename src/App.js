import logo from './logo.svg';
import './App.css';
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import MealPlan from './components/MealPlan'
import RealMoney from './components/RealMoney'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/mealplan" element={<MealPlan/>} />
            <Route path="/realmoney" element={<RealMoney/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
