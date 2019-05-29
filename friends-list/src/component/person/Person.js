import React from 'react';
import './Person.css';

const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div
      className="person"
    >
      <img
        src={url}
        alt={"profile pic"}
      />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Person;
