import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import CanvasOne from './pages/CanvasOne';

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
