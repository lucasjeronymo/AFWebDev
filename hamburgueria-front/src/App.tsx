import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BurgersPage from './pages/BurgersPage';
import ClientsPage from './pages/ClientsPage';
import { ThemeProvider } from './context/ThemeContext';
import AddClientPage from './pages/AddClientPage';
import AddBurgerPage from './pages/AddBurgerPage';
import Navbar from './components/NavBar';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/burgers" element={<BurgersPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/add-client" element={<AddClientPage />} />
            <Route path="/add-burger" element={<AddBurgerPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
