import { Navigate, Route, Routes } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

import AuthPage from './pages/AuthPage';
import HotelsPage from './pages/HotelsPage';

import './App.css';

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
