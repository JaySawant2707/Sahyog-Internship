import { useState } from "react";

export default function FetchUsers() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // FUNCTION : getUsersFromApi()
  // This function :
  // - uses fetch()

  async function getUsersFromApi() {
    try {
      setLoading(true); //start loading
      setErrorMessage(""); //clear previous error
      setUsersData([]); //clear previous data

      // FETCH API -> Get users JSON data
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      //If server gives error (400, 404, 500)
      if (!response.ok) {
        throw new Error("Unable to load users from server");
      }

      //Convert response into actual JSON object
      const data = await response.json();
      // save data into state
      setUsersData(data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false); //stop loading
    }
  }

  return (
    <div style={{ Padding: "20px" }}>
      <h2>Fetch API Example - Users List</h2>

      {/* BUTTON : Fetch Users */}
      <button onClick={getUsersFromApi}>Load Users (Fetch API)</button>

      {/* Loading Message */}
      {loading && <p>Loading Users...</p>}

      {/* Error Message */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {/*SHOW USERS*/}
      {usersData.map((user) => {
        <div
          key={user.id}
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >

        </div>;
      })}
    </div>
  );
}
