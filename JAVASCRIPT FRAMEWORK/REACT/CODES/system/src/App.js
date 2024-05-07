import { Route , Routes} from "react-router-dom";

/* IMPORT VIEWS */
import LoginViews from "../src/Views/Login.js";
import RegisterViews from "../src/Views/Register.js";
import HomeViews from "../src/Views/Home.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginViews/>}></Route>
        <Route path="/register" element={<RegisterViews/>}></Route>
        <Route path="/" element={<HomeViews/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
