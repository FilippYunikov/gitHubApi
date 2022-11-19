import React, { useState, useEffect } from 'react';
import './App.css';
import { UserCard } from './components/userCard/UserCard';
import { Input } from './components/input/Input';


const App = () => {
  const [githubUser, setGithubUser] = useState<string>('');

  return (
    <div className="App">
      <header>
        <h1>{'Test'}</h1>
      </header>
      <body>
        <Input onChange={e => setGithubUser(e.target.value)} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', marginTop: 100, marginBottom: 40 }}>
          <UserCard search={githubUser} />
        </div>
      </body>
    </div>
  );
};

export default App;
