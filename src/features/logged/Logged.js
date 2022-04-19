import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { singin } from './loggedSlice';

function Logged() {
  const isLogged = useSelector((state) => state.logged.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{isLogged ? 'Signed In' : 'Signed Out'}</span>
      <button onClick={() => dispatch(singin())}>{isLogged ? 'Sign Out' : 'Sign In'}</button>
    </div>
  );
}

export default Logged;
