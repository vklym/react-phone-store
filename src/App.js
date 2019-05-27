import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import ProductList from './component/ProductList'
import Details from './component/Details'
import Cart from './component/Cart'
import Default from './component/Default'
import Modal from './component/Modal'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={ProductList}/>
      <Route path='/details' component={Details}/>
      <Route path='/cart' component={Cart}/>
      <Route component={Default}/>
    </Switch>
    <Modal/>
    </>
  );
}

export default App;
