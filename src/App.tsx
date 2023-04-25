import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Container } from './components/Container';
import Counter from './components/Counter';

function App() {
  const personName = {
    first: 'John',
    last: 'Doe'
  }

  const nameList = [
    {
      first: 'Nguyễn',
      last: 'A'
    },
    {
      first: 'Trần',
      last: 'B'
    },
    {
      first: 'Văn',
      last: 'C'
    }
  ]

  return (
    <div className='App'>
      <Greet name="Tùng" messageCount={5} isLoggedIn={true} />

      <Person name={personName} />

      <PersonList names={nameList} />

      <Status status='success' />

      <Heading>Placeholder text</Heading>

      <Oscar>
        <Heading>Giải Oscar thuộc về Chris Pratt</Heading>
      </Oscar>

      <Button handleClick={() => {
        console.log('Button clicked')
      }}></Button>

      <Container styles={{border: '1px solid black', padding: '1rem'}} />
      <Counter />
  </div>
  );
}

export default App;
