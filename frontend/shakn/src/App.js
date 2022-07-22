
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { Card, makeStyles } from '@mui/material';
import ListingsPage from './pages/ListingsPage';
import ProductPage from './pages/ProductPage';
import products from './products'
import CartPage from './pages/CartPage'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

function App() {
  return (
   <Router>
     {/* <Navbar /> */}
     <main>
      <Routes>
        <Route path='/products' element={<ListingsPage />} />
        <Route path='/products/:id' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/cart/:id' element={<CartPage />} />
      </Routes>
      </main>
    </Router>
  );
}


export default App;
