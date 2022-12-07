import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './Pages/Home';
import { ProductsPage } from './Pages/ProductsPage';
import { CartPage } from './Pages/CartPage';
import { SingleProductPage } from './Pages/SingleProductPage';
import { AboutPage } from './Pages/AboutPage';
import { ContactPage } from './Pages/ContactPage';
import { Navbar } from './Component/Navbar';
// import './styles/style.css'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<ProductsPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/singleproduct/:id" element={<SingleProductPage />}/>
        <Route path="product/singleproduct/:id" element={<SingleProductPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
