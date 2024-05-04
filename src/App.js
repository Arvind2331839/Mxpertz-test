import "./App.css";
import Data from "./components/Data";
import Header from "./components/Header";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-[url('https://ik.imagekit.io/dev24/Mystery_of_the_Robot_Planet_rupsfOKUG.png')] bg-cover bg-no-repeat bg-center bg-fixed backdrop-blur-sm ">
   <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Data />} />
          </Routes>
      </BrowserRouter>
      
    </div>
   );
}

export default App;
