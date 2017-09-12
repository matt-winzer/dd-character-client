import React from 'react';

const Test = (props) => {

  if (props.character) {
    return (
      <div>
        <p>{props.character.name}</p>
        <p>{props.character.race}</p>
        <p>{props.character.background}</p>
        <p>{props.character.alignment}</p>
        <p>{props.character.class.name}</p>
      </div>
    )
  }

  return (
    <main>
      <h1>Hello from Test</h1>
    </main>
  )
}

export default Test;
