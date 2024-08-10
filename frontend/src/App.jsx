
import './App.css'
import Login from "../src/Components/LoginPage/Login"
import Header from './Components/Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/LandingPage/Home'
import Footer from './Components/Footer/Footer'
import Collection from './Components/CollectionPage/Collectionsectionpage'
import Exhibit from './Components/Exhibitionpage/Exhibit'
import Artworkproduct from './Components/CollectionPage/artworkproduct/Artworkproduct'
// import Register from './Components/RegisterPage/Register'
function App() {


  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/collection/:id" element={<Artworkproduct/>}/>
        <Route path="/exhibition" element={<Exhibit/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    
 
  
    
    </div>
  )
}

export default App
