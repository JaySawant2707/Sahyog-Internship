import { useState } from "react";

function App5_ConditionalRendering() {
  const [loggedIn, setLoggedIn] = useState(false);
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`submitted name : ${name}`);
  };

  return (
    <div>
      <h1>Conditional Rendering</h1>
      {loggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Logout" : "Login"}
      </button>

      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App5_ConditionalRendering;
