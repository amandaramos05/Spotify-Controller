import React, { Component } from "react";
import ViewRoomPage from "./Practice-ViewRoomPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import RoomJoin from "./RoomJoin"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Grid container alignItems='center' sx={{mt: "45vh"}} align='center'>
              <Grid item xs={12} align = "center" sx={{height: "5vh"}}>
                <h3>HOUSE PARTY</h3>
              </Grid>
              <Grid item xs={12} align = "center" sx={{height: "5vh"}}>
                <Button href="/create" sx={{m:'10px'}} variant="contained">Create A Room</Button>
                <Button href="/join" sx={{m:'10px'}} variant="contained" color="error">Join A Room</Button>
              </Grid>
            </Grid>
          </Route>
          {/* <Route path="/join" component={RoomJoinPage} /> */}
          <Route path="/create" component={CreateRoomPage} />
          <Route path="/room/:roomCode" component={Room} />
          <Route path="/join" component={RoomJoin} />
        </Switch>
      </Router>
    );
  }
}
