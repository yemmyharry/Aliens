import React from "react";
import { useSelector } from "react-redux";

import { Paper, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";

const UserTable = props => {
  const users = useSelector(state => state.users)
  return (
    <Paper style={{ padding: 20, margin: 35, width: 500 }}>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Hobby</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {
          users.map(item=>{
              return (
                <TableRow>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.birthday}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.hobby}</TableCell>
              </TableRow>
              )
          })
      }
      </TableBody>
    </Paper>
  );
};

export default UserTable;