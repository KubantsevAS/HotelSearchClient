import { Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage/AuthPage';
import './App.css';
import HotelsPage from './components/HotelsPage/HotelsPage';
import { useSelector } from 'react-redux';

function App() {
  const store = useSelector(store => store)
  console.log(store)
  console.log(store.reducer.AuthReducer)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
        <Route path='/hotels' element={<HotelsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
