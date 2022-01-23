import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Home } from './Home';
import { ProductsPage } from './ProductsPage';
import { CartPage } from './CartPage';
import { SingleProductPage } from './SingleProductPage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';
import { Navbar } from './Navbar';

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
