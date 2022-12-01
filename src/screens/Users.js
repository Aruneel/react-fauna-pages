import { useEffect, useState } from 'react';
import { getAllUsers, getAllLargeFileData } from '../models'

const Users = () => {
    const [users, setUsers] = useState([])
    // useEffect(() => {
    //     async function fetchAllUsers() {
    //       // You can await here
    //       let data = await getAllUsers()
    //       setUsers(data)
    //     }
    //     fetchAllUsers();
    //   }, [])

      useEffect(() => {
        async function fetchAllUsers() {
          // You can await here
          let data = await getAllLargeFileData()
          console.log('size', data.length)
          setUsers(data)
        }
        fetchAllUsers();
      }, [])

      
  return (
    <div>
      
      <h1>List of Users</h1>
      <div className="row">
        <ul>
          {users.length > 0 ? users.map((user, idx) =>
            <li key={user.data.username}>{user.data.name}</li>
          ) : 'No User is there present'}
        </ul>
      </div>
    </div>
  )
}

export default Users