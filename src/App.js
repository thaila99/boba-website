import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom" 


import Navbar from './Components/Navbar'

import Footer from './Components/Footer';


import Home from './pages/Home';
import Menu from './pages/Menu';
import Setting from './pages/Setting';


function App() {
  return (
    <Router>
         <Navbar />
      <div className="container main">
<Routes>
  <Route path="" element={<Home />}></Route> 
  <Route path="Menu" element={<Menu />}></Route> 
  <Route path="Setting" element={<Setting />}></Route> 
</Routes>
      </div>
    
  <Footer/>
    </Router>

  )
}

export default App