import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import QuickStart from '../src/Quickstart/index.js'
import Describing from '../src/Describing the Ui/index.js'
import Interactivity from '../src/Adding Interactivity/index.js'
function App() {
  return (
    <div className="App">
      {/* ROUTER DOM */}
        <Routes>
          <Route path='/QuickStart' element={<QuickStart/>}></Route> {/* www.localhost/QuickStart */}
          <Route path='/Describing' element={<Describing/>}></Route> {/* www.localhost/Describing */}
          <Route path='/Interactivity' element={<Interactivity/>}></Route> {/* www.localhost/Interactivity */}
        </Routes>
    </div>
  );
}

export default App;
