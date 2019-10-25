import React, { Fragment, useState } from "react";
import { Grid, AppBar } from "@material-ui/core";
import { newUser } from './userAction';
import { useDispatch } from 'react-redux';
import UserTable from "./UserTable";
import FormInput from "./FormInput";

const App = props => {
    const dispatch = useDispatch()
  return (
    <Fragment>
     <AppBar >
       <h4>My User Update table</h4>
     </AppBar> <br/> <br/> <br/><br/>
      <Grid container>
        <FormInput onSubmit={user => {dispatch(newUser(user)); }} />
        <UserTable />
      </Grid>
    </Fragment>
  );
};

export default App;