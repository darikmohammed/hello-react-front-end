import { createAsyncThunk } from '@reduxjs/toolkit';

const GetGreeting = createAsyncThunk('Greeting/getGreeting', async () => {
  // const response = fetch('https://afternoon-lake-72767.herokuapp.com/')
  //   .then((response) => response.json())
  //   .then((data) => data);
  // console.log('message form async thunk', response);
  // return response.message;
  const response = await fetch('https://afternoon-lake-72767.herokuapp.com/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const variable = await response.json();
  return variable.message.message;
});

export default GetGreeting;
