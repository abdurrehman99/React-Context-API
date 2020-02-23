import React from 'react';
import { MyContext } from './Context';
import UserList from './UserList';

 function App() {
  return (
    <MyContext>
      <UserList/>
    </MyContext>
  );
}

export default App;
