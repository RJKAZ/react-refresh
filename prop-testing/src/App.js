import { useState } from 'react';
import './App.css';
import Student from './Student';

function App() {
  const [name, setName] = useState('Alvin');
  return (
    <div className='App'>
      <h1> Hello Props </h1>
      <Student
        name={name}
        email='alvin@gmail.com'
        other={{ address: 'Los Angeles', mobile: '111' }}
      />
      <button
        onClick={() => {
          setName('Simon');
        }}
      >
        Update Name
      </button>
    </div>
  );
}

//https://www.youtube.com/watch?v=DNkDt0wnFc0&t=5s

export default App;
