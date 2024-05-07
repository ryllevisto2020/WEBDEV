import HomeView from "../src/views/Home"
import NavBar from "../src/components/NavBar";
import AboutView from "../src/views/About"
import {Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeView/>}></Route>
        <Route path="/about" element={<AboutView/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
