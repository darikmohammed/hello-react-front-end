import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetGreeting from '../Redux/Greeting/GetGreeting';

function Greeting() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.Greeting);
  useEffect(() => {
    dispatch(GetGreeting());
  }, []);
  return (
    <div>
      <h1>Generated Greeting Message: </h1>
      <p>{message.message}</p>
    </div>
  );
}

export default Greeting;
