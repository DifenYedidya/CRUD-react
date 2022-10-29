import './App.css';
import Create from './components/create';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="main">
        <h1 className='main-header'>crud react</h1>
        <div>
          <Create/>
        </div>
      </div>
    </Router>
  );
}

export default App;
