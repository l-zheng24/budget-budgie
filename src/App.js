import './App.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import MealPlan from './components/MealPlan'
import RealMoney from './components/RealMoney'
import { NavBar } from './components/NavBar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div>
      <NavBar />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/mealplan" element={<MealPlan/>} />
              <Route path="/realmoney" element={<RealMoney/>} />
          </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
