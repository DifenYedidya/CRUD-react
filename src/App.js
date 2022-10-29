import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />  
          <Route path='/update' element={<Update />} />
        </Routes>
        <div className='link'>
          <h2>Go to</h2>
          <Link to='/create'><h3>create page</h3></Link>
          <Link to='/read'><h3>read page</h3></Link>
        </div>
      </div>
    </Router>
  );
}

export default App;