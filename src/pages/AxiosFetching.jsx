import axios from "axios"
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const AxiosFetching = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setError("")
    setIsLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {isLoading && 
        <div className="flex">
          <Loader /><h2>Loading...</h2>
        </div>
      }

      {error && <h2>{error}</h2>}
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AxiosFetching;
