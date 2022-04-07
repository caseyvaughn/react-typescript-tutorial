import React from 'react'

//specify what props it takes
//can also pass an object directly into React, but more common to declare an interface
//place any information inside of props

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean; //add a ? to make the field (prop) optional
  i?: number;
  fn?: (bob: string) => string;
  //use an arrow function to set a function; can return void or specify the data type
  person: Person; //utilizes the Person interface that sets up an object
}

export const TextField: React.FC<Props> = () => {
  //adding : React.FC makes TextField a React functional component
  
  return (
    <div>
      <input/>
    </div>
  )
}
