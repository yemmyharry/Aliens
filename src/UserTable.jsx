import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { loadUsers } from "./userAction";
import {
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

const UserTable = props => {

  let users = useSelector(state => state.users);
  let muser = users.flat()
  console.log(users);
  return (
    <Paper style={{ padding: 20, margin: 35, width: 500 }}>
      <TableHead>
        <TableRow>
          <TableCell>USER ID</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Hobby</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {muser.map((item, index) => {
          console.log(item);
          if (item == null) {
          } else {
            return (
              <TableRow key={index}>
                <TableCell>{item.userId}</TableCell>
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.birthday}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.hobby}</TableCell>
              </TableRow>
            );
          }
        })}
      </TableBody>
    </Paper>
  );
};

export default UserTable;
