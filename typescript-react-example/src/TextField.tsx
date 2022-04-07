import React, { useState, useRef } from 'react'

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
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ handleChange}) => {
  //adding : React.FC makes TextField a React functional component

  // const [count, setCount] = useState<number | null>(5)
  //typescript reads the 5 and infers that the type for count & setCount is a number
  //use <number | null> to declare the data type as a number OR null
  //note: undefined is different than null

  const [count, setCount] = useState<TextNode>({ text: 'hello' })
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange}/>
      {/* pro-tip: hovering over the ref will show what element it is expecting (<HTMLInputElement>) that gets placed above next to useRef */}

    </div>
  )
}
