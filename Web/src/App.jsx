// import { Principal } from "./pages/Principal"
import { Header } from "./components/Header"
import { Divider } from "./components/Divider"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"

function App() {
  

  return (
    
   <>
     <Divider/>
     <Header/>

     <Outlet/>

    
     <Footer/>
   </>
    // <Principal/>
  )

}

export default App
