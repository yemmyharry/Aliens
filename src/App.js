import React, { Fragment, useState } from "react";
import { Grid, AppBar } from "@material-ui/core";
import UserTable from "./UserTable";
import FormInput from "./FormInput";

const App = () => {
  const UserState = [
    // {
    //   firstName: "John",
    //   lastName: "Wick",
    //   birthday: "01/01/1987",
    //   age:50,
    //   hobby: "Dog petting"
    // }
  ];
  const [users, setUser] = useState(UserState);

  const addUser = user => {
    setUser([...users, user]);
  };

  return (
    <Fragment>
     <AppBar >
       <h4>My User Update table</h4>
     </AppBar> <br/> <br/> <br/><br/>
      <Grid container>
        <FormInput addUser={addUser}/>
        <UserTable users={users}/>
      </Grid>
    </Fragment>
  );
};

export default App;