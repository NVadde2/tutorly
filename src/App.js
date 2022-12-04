import './App.scss';

import LoginView from './components/Login/LoginView';
import RegisterView from './components/Login/RegisterView';
import UserDetailView from './components/DetailView/UserDetailView';
import TeachView from './components/Teach/TeachView';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/login' element={<LoginView/>} />
          <Route path='/register' element={<RegisterView/>} />
          <Route path='/details' element={<UserDetailView/>} />
          <Route path='/teach' element={<TeachView/>} />
        </Routes>
    </Router>
  );
}

export default App;
