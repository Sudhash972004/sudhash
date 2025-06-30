// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/EmployeeLogin';
import Dashboard from './pages/Dashboard';
import LeaveForm from './pages/LeaveForm';
import AdminPanel from './pages/AdminPanel';
import LeaveStatus from './pages/LeaveStatus';
import AdminLogin from './pages/AdminLogin';
// import UnifiedLogin from './pages/UnifiedLogin.jsx';


// // import ProtectedRoute from './components/ProtectedRoute';

// {/* <Route
//   path="/admin"
//   element={
//     <ProtectedRoute>
//       <AdminPanel />
//     </ProtectedRoute>
//   }
// /> */}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apply-leave" element={<LeaveForm />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path='/leave-status' element={<LeaveStatus/>} />
        {/* <Route path='/admin/login' element={<AdminLogin/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
  
export default App;

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<UnifiedLogin />} />/ */}
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/apply-leave" element={<LeaveForm />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/leave-status" element={<LeaveStatus />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
