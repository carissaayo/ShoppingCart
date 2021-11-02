import { useState } from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import './App.css';
import { useGlobalContext } from "./context";

//Components 
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
// Screens
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import HomeScreen from './screen/HomeScreen';
            

function App() {
  const { sideBar, setSideBar } = useGlobalContext();

  return (
    <Router>
      <Navbar setSideBar={setSideBar} />
      <SideBar sideBar={sideBar} setSideBar={setSideBar} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/cart" component={CartScreen} />
        </Switch>
      </main>
 
    </Router>
  );
}

export default App;
