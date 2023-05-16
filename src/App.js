import React, { useRef, useState } from 'react';
import LoginModal from './components/Login/LoginModal';
import Wrapper from './components/Helper/Wrapper';
import Home from './components/Home/Home';

function App() {
  const inputId = useRef()
  const inputPassword = useRef()

  const [isLogin, setIsLogin] = useState(false)


  const submitLoginHandler = (event) => {
    event.preventDefault()
    const enteredId = inputId.current.value
    const enteredPassword = inputPassword.current.value
    setIsLogin(true)
  }



  return (
    <React.Fragment>
      <Wrapper>
        {isLogin && <LoginModal onSubmit={submitLoginHandler} />}
        <Home />
      </Wrapper>
    </React.Fragment>
  );
}

export default App;