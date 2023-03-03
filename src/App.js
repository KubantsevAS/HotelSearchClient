import { Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage/AuthPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
