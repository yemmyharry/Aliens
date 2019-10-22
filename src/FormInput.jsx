import React, { useState } from "react";
import { Grid, TextField, Paper, Button } from "@material-ui/core";

const FormInput = props => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    birthday: "",
    age: '',
    hobby: ""
  };
  const [user, setUser] = useState(initialFormState);

  const handleInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.birthday) {
      setUser(initialFormState);
      return props.addUser(user);
    }
  };

  return (
    <Paper style={{ margin: 30, padding: 30, width: 500 }}>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid>
            <TextField
              label="First Name"
              placeholder="John"
              style={{}}
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleInput}
              variant='outlined'
            ></TextField><br/><br/>
          </Grid>
          <Grid>
            <TextField
              label="Last Name"
              placeholder="Doe"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleInput}
              variant='outlined'
            ></TextField><br/><br/>
          </Grid>
          <Grid>
            <TextField
              type="date"
              label="Date Of Birth"
              placeholder="mm/dd/yyyy"
              InputLabelProps={{ shrink: true }}
              name="birthday"
              value={user.birthday}
              onChange={handleInput}
              variant='outlined'
            ></TextField> <br/><br/>
          </Grid>
          <Grid>
            <TextField
              label="Age"
              type="number"
              placeholder="20"
              name="age"
              value={user.age}
              onChange={handleInput}
              variant='outlined'
            ></TextField> <br/><br/>
          </Grid>
          <Grid>
            <TextField
              label="Hobby"
              placeholder="Music"
              type="text"
              name="hobby"
              value={user.hobby}
              onChange={handleInput}
              variant='outlined'
            ></TextField> <br/><br/>
          </Grid>
          <Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              Add New User
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default FormInput;