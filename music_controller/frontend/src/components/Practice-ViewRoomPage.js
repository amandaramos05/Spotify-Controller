import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default class ViewRoomPage extends Component {
  constructor(props) {
    super(props);
  }
// to use js code use {}
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} align = "center">
          <Typography variant="h4" gutterBottom marginTop ={25}>
            ROOM CODE: {state.room_code}
          </Typography>
        </Grid>
        <Grid item xs={12} align = "center">
          <Typography variant="h5" gutterBottom marginTop ={1}>
            votes:
          </Typography>
        </Grid>
        <Grid item xs={12} align = "center">
          <Typography variant="h5" gutterBottom marginTop ={1}>
            guests can pause: true
          </Typography>
        </Grid>
        <Grid item xs={12} align = "center">
          <Typography variant="h5" gutterBottom marginTop ={1}>
            host:
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
