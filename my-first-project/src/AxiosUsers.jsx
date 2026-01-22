import { useState } from "react";


export default function AxiosUsers() {
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState([]);
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
                "https://jsonplaceholder.typicode.com/users"
            )
        }catch (error) {

        }
    }
}