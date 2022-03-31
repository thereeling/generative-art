import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import CanvasOne from './pages/CanvasOne';


// This is a comment i made from my Linux system!

// function resizeCanvas(canvas) {
//   const { width, height } = canvas.getBoundingClientRect()

//   if (canvas.width !== width || canvas.height !== height) {
//       const { devicePixelRatio:ratio=1 } = window
//       const context = canvas.getContext('2d')
//       canvas.width = width*ratio
//       canvas.height = height*ratio
//       context.scale(ratio, ratio)
//       return true 
//       here you can return some usefull information like delta width and delta height instead of just true
//       this information can be used in the next redraw...
//   }

//   return false
// };

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
      <Routes>
        <Route exact path="/canvasone" element={<CanvasOne/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
