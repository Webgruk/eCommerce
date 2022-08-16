import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

// screens
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import HomePage from './screens/HomePage'

//components
import Navbar from './components/Navbar'
import BackDrop from './components/BackDrop'
import SideDrawer from './components/SideDrawer'
function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  )
}
export default App
