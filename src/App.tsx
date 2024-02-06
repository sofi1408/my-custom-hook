
import './App.css'

import ProductList from './components/ProductList'

import {useLogin} from './hooks/useLogin';

function App() {

  const {isLoggedIn, handleLogIn, handleLogOut} = useLogin();

  return (
    <>
      <div>
        <button onClick={isLoggedIn? handleLogOut :handleLogIn }>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
        <ProductList />
      </div>
    </>
  )
}

export default App
