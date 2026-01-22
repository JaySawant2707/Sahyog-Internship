import { Component } from "react";

class WelcomeClass extends Component {
    render(){
        return  <h2>Hello World!</h2>
    }
}

function App2_Components() {
    return(
        <div>
            <WelcomeClass />
        </div>
    )
}

export default App2_Components;