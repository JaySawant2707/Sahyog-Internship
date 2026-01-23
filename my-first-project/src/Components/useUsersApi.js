import { useState } from "react";
import axios from "axios";

export default function useUsersApi() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //Function to call users API
  async function loadUsers() {
    try {
      setLoading(true); //start loading
      setErrorMessage(""); //clear previous error
      setUsersData([]); //clear previous data

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.data;
      setUsersData(data);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false); //stop loading
    }
  }

  return { usersData, loading, errorMessage, loadUsers };
}
