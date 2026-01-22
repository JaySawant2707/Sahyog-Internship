import { useState } from "react";

function App3_PropsState(){
    const [count, setCount] = useState(0);

    return(
        <>
            <h1>My name = "React Student"</h1>
            <p>Button clicked {count} times. </p>
            <button onClick={() => setCount(count +1)}>Click Me</button>
        </>
    );
}

export default App3_PropsState;
