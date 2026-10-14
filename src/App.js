import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import authRoute from './authRoute';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<authRoute><Dashboard /></authRoute>} />
      <Route path="/addUser" element={<authRoute><AddUser /></authRoute>} />
      <Route path="/edit-user/:id" element={<authRoute><EditUser /></authRoute>} />
    </Routes>
  );
}

export default App;
