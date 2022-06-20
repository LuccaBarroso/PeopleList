import React from 'react';

import './App.scss';
import FormUser from './components/Users/FormUser';
import DisplayUsers from './components/Users/DisplayUsers';
const initialUsers  = ["Lucca (20)", "Mario (30)", "Lucas (40)"];

function App() {
  const [users, setUsers] = React.useState(initialUsers);

  const createNewUserHandler = (userName, userAge) => {
    setUsers([...users, `${userName} (${userAge})`]);
  }

  return (
    <div className="App">
      <FormUser onCreateNewUser={createNewUserHandler} />
      <DisplayUsers users={users} />
    </div>
  );
}

export default App;
