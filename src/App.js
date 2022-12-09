import './App.scss';

import LoginView from './components/Login/LoginView';
import RegisterView from './components/Login/RegisterView';
import UserDetailView from './components/DetailView/UserDetailView';
import TeachView from './components/Teach/TeachView';
import { AuthContextProvider } from './components/context/AuthContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <AuthContextProvider>
    <Router>
        <Routes>
          <Route path='/' element={<LoginView/>} />
          <Route path='/register' element={<RegisterView/>} />
          <Route path='/userDetails' element={<UserDetailView/>} />
          <Route path='/teach' element={<TeachView/>} />
        </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
