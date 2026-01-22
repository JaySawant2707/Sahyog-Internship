import { useState } from "react";

function App4_EventHandling(){
    
    const [message, setMessage] = useState(" ");

    const handleClick = () =>{
        setMessage("Button was clicked");

    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return(
        <>
            <h1>Event Handling example</h1>
            <input type="text" onChange={handleChange} placeholder="type something" />
            <button onClick={handleClick}>click me</button>
            <p>{message}</p>
        </>
    )
}

export default App4_EventHandling
