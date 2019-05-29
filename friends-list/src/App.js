import React from 'react';
import './App.css';
import Person from './component/person/Person';

const PersonList = () => {
  const people = [
    {
      img: 22, 
      name: "John",
      job: "Nurse"
    },
    {
      img: 34,
      name: "William",
      job: "Teacher"
    },
    {
      img: 56,
      name: "Lin",
      job: "Cooker"
    }
  ];

  return (
    <section>
      <Person 
        person={people[0]}
      >
        Neque porro quisquam est qui dolorem ipsum quia dolor 
        sit amet, consectetur.
      </Person>
      <Person person={people[1]}/>
      <Person person={people[2]}/>
    </section>
  )
}

const App = () => <PersonList />;

export default App;
