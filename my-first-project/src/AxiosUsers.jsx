import { error } from "console";
import { useState } from "react";

export default function AxiosUsers() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Function : getUserUsingAxios()
  //Axios automatically converts response to JSON
  async function getUsersUsingAxios() {
    try {
      setLoading(true);
      setErrorMessage("");
      setUsersData([]);

      //Axios GET CALL
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );

      //data is already JOSN -> response.data
      setUsersData(response.data);
    } catch (error) {
      setErrorMessage("Error laoding usersL " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Axios API Example - Users List</h2>

      <button onClick={getUsersUsingAxios}>Load Users(Axios)</button>

      {loading && <p>Loading Users...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {usersData.map((user) => (
        <div
          key={user.id}
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "4px solid #ddd",
          }}
        >
          <p>
            <strong>Name</strong> {user.username}
          </p>
          <p>
            <strong>Email</strong> {user.email}
          </p>
          <p>
            <strong>Phone</strong> {user.phone}
          </p>
        </div>
      ))}
    </div>
  );
}
