import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage/AuthPage';
import './App.css';
import HotelsPage from './components/HotelsPage/HotelsPage';
import { connect, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const App = (props) => {
  
  const auth = useSelector(store => store.reducer.AuthReducer.auth)

  console.log(auth);
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/auth'/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/hotels' element={<HotelsPage/>}/>
      </Routes>
    </div>
  );
}



const mapStateToProps = (store) => ({
  auth: store.reducer.AuthReducer.auth
})

let AppContainer = connect(mapStateToProps) (App);

export default AppContainer