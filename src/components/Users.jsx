import { useState, useEffect } from "react";
import { getUsers } from "../api/api";

export default function Users(){
    const [users, setUsers] = useState([])
 

      useEffect(() => {
        getUsers().then((data) => {
          setUsers(data.data.users);
        });
      }, []);


console.log(users)

}