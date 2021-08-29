import './App.css';
import {UserContextProvider} from './contexts/UserContext'
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Patients from './pages/patients/Patients';
import Doctors from './pages/doctors/Doctors';
import AdminDashboard from './pages/admin/AdminDashboard';
import Auth from './pages/auth/Auth'

function App() 
{
  return (
    <UserContextProvider>
      <Router className="App">
        <Navbar />
        <Switch>
          <Route path = '/'         exact component = { Home } />
          <Route path = '/patients' exact component = { Patients } />
          <Route path = '/doctors'  exact component = { Doctors } />
          <Route path = '/admin'    exact component = { AdminDashboard } />
          <Route path = '/auth'   exact component = { Auth } />
        </Switch>
      </Router>
    </UserContextProvider>  
  );
}

export default App;
