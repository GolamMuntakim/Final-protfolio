
// import { loadSlim } from "tsparticles-slim";

import { Outlet } from "react-router-dom"
import Design from "./component/Design"
import Footer from "./component/Footer"
import Nav from "./component/Nav"

function App() {
  

  return (
    <>
     <div>
     <div className='app text-white'>
        <Nav className="nav text-white"></Nav>
        </div>
        <div>
       <Outlet></Outlet>
       </div>
        <div className="">
         <Design></Design>
        </div>
      
       
     </div>
    </>
  )
}

export default App
