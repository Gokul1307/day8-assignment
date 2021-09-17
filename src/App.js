import logo from './logo.svg';
import './App.css';
import {Route } from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component'
import Signin from './pages/signin-page/signin.component'
import cart from './pages/cart-page/cart-page.component'
import shop from './pages/shop-page/shop-page.component'
function App() {

  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/cart" component={cart} />
      <Route exact path="/shop" component={shop} />
    </div>
  );
}

export default App;