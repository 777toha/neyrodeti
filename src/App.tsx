import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import Header from './components/Header'
import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
