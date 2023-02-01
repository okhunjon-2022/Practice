import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes,Route} from "react-router-dom"
import {ROUTERS} from "./data/Navbars"
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {
          ROUTERS?.map((item,inx)=><Route key={item.id} path={item.link} element={item.element}/>)
          
        }
        
      </Routes>

      <Footer/>
      
    </div>
    
  );
}

export default App;
