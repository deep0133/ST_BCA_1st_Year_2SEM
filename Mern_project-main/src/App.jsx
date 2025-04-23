import { Toaster } from 'react-hot-toast'
import Register from './Component/Register'
import {Routes , Route } from "react-router-dom"
import Loggin from './Component/Loggin'
import Home from './Component/Home'


function App() {
 

  return (
   
   <>
   <Toaster position='top-right' toastOptions={{duration : 3000}}/>
   <Routes>
   <Route path = '/register' element = {<Register />}/>
   <Route path = '/loggin' element = {<Loggin />}/>
   <Route path = '/Home' element = {<Home />}/>
   </Routes>
  
   
   
   
   
   </>
  )
}

export default App
