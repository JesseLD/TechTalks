// import { Principal } from "./pages/Principal"
import { Header } from "./components/Header"
import { Divider } from "./components/Divider"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Messages } from "./pages/partials/Messages"

function App() {
  

  return (
    
   <>


     <Divider/>
     <Header/>
     <Messages/>
     <Outlet/>

    
     <Footer/>
   </>
    // <Principal/>
  )

}

export default App
