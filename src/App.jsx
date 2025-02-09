import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import './App.css'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Places from './components/Places';
import PlanFormPage from './components/PlanFormPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/places" element={<Places/>}/>
                <Route path="/planFormPage" element={<PlanFormPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
