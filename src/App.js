import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import CanvasOne from './pages/CanvasOne';

function App() {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  };
  return (
    <div className="App">
      <Router>
      <Nav />
      <Routes>
        <Route exact path="/canvasone" element={<CanvasOne draw={draw}/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
