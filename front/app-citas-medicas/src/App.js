import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Patients from './pages/patients/Patients';
import Doctors from './pages/doctors/Doctors';
import AdminDashboard from './pages/admin/AdminDashboard';
import Logger from './pages/logger/Logger'

function App() 
{
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route path = '/'         exact component = { Home } />
        <Route path = '/patients' exact component = { Patients } />
        <Route path = '/doctors'  exact component = { Doctors } />
        <Route path = '/admin'    exact component = { AdminDashboard } />
        <Route path = '/logger'   exact component = { Logger } />
      </Switch>
    </Router>
  );
}

export default App;
