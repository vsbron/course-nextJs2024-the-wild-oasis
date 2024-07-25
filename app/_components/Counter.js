// Declaring the component as the regular component
"use client";

// Importing the useState hook
import { useState } from "react";

function Counter({ users }) {
  // Creating state variable
  const [count, setCount] = useState(0);

  // Logging on client
  console.log(users);

  // Returned JSX
  return (
    <>
      <p>The are are {users.length} users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
}

export default Counter;
