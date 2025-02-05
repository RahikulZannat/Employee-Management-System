import React, { useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([
    {Name: "Rahikul Zannat", Email: "rahik@gmail.com", Age: 27 },
  ]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success mb-3">Add User</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
               users.map((user) =>{
                return   <tr>
                       <td>{user.Name}</td>
                       <td>{user.Email}</td>
                       <td>{user.Age}</td>
                       <td>
                       <Link to="/update" className="btn btn-success mb-3">Update</Link>
                            <button className="btn btn-success ms-1 mb-3">Delete</button>
                       </td>
                   </tr>

               })
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
