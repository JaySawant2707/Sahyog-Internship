import React, { Component } from "react";

//Step1: Create safety boundary (ErrorBoundary)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props); //Must call super(Props) to use "this" inside the class
    //hasError -> false means everything is working fine
    this.state = { hasError: false };
  }

  // if any child component throws an error, this method runs automatically
  static getDerivedStateFromError(error) {
    //set  state to show fallback UI
    return { hasError: true };
  }

  //used to log error details for debugging (like sending error info to backend)
  componentDidCatch(error, info) {
    console.log("Error caught inside the boundary: ", error, info);
  }

  render() {
    //If an errror happened -> show a safe UI
    if (this.state.hasError) {
      return (
        <div
          style={{
            backgroundColor: "#98dcfcff",
            padding: "20px",
            borderRadius: "8px",
            color: "red",
            textAlign: "center",
          }}
        >
          <h2>OOps... Something is wrong!</h2>
          <p>
            Don't worry - Our app is still running safely!
            <br />
            Try refreashing the page
          </p>
        </div>
      );
    }

    //if no error then render normally
    return this.props.children;
  }
}

//----------------------------------------------------------------------------
//step 2 : create a component that may produce error
function StudentProfile() {
  const [marks, setMarks] = React.useState(80);
  const [showError, setShowError] = React.useState(false);

  //if showError is true -> this line throws an error on purpose
  if (showError) {
    throw new Error("Something went wrong while loading student profile!");
  }

  return (
    <div style={{ margin: "20px" }}>
      <h3>Student Profile</h3>
      <p>
        <b>Student Name: </b>Rahul Yadav
      </p>
      <p>
        <b>Current Marks: </b>
        {marks}
      </p>

      <button onClick={() => setMarks(marks + 5)}>Improve Marks</button>
      <button
        style={{
          marginLeft: "10px",
          backgroundColor: "#1095a4ff",
          color: "white",
        }}
        onClick={() => setShowError(true)}
      >
        Simulate Error
      </button>
    </div>
  );
}

//---------------------------------------------------------------------------
//Step 3 : Wrap the risky component inside the ErrorBoundary
function App9_ErrorBoundary() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Error Boundary Example (Student Project)</h1>
      <p>
        Below we have a <b>Student Profile</b> component. IF if falis, this
        error boundary will catch the problem and show a friendly message
        instead of crashing the app.
      </p>

      {/* Wrap inside the ErrorBoundary to protect from crashes */}
      <ErrorBoundary>
        <StudentProfile />
      </ErrorBoundary>

      <hr />
      <p>
        Notice: even if <b>student profile </b>fails, this part still runs
        smoothly.
      </p>
    </div>
  );
}

export default App9_ErrorBoundary;
