import Navbar from "./components/Navbar"
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import MusicNav from "./components/MusicNav";
import Footer from "./components/Footer";
import Video from "./pages/Video";
import Tour from "./pages/Tour";
import Merch from "./pages/Merch";




const App = () => {
  

  return (
    <div className="container">
       <Navbar/>
     
      <Routes>
          <Route index element={<Home />} />
          <Route path="MusicNav" element={<MusicNav/>} />
          <Route path="Video" element={<Video/>} />
          <Route path="Tour" element={<Tour/>} />
          <Route path="Merch" element={<Merch/>} />
      </Routes>
      <div>
   <Footer/>
   </div>
    </div>
  )
}
export default App