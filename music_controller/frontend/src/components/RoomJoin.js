import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class ViewRoomPage extends Component {
  constructor(props) {
    super(props);
    this.state={
        error: "",
        roomCode: ""
    }
    this.handleJoinRoomButtonPressed=this.handleJoinRoomButtonPressed.bind(this)
    this.handleRoomCodeChange=this.handleRoomCodeChange.bind(this)
    console.log(this)
  }


// use something like this:
handleJoinRoomButtonPressed() {
  console.log("join button pressed")
  let body = JSON.stringify({
    code: this.state.roomCode
  

  })
  console.log(body)
  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  }
  fetch('/api/join-room', requestOptions)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
    console.log("post response")
   
    if (data["Message"] == 'Invalid Room Code.') {
      console.log("if statement")
      this.setState({
        error: "Invalid Room Code"
      });
    }
    else {
      this.setState({
        error: ""
      })
      this.props.history.push("/room/" + this.state.roomCode)
    }
  }) 
}

handleRoomCodeChange(event) {
  console.log("code changed")
  console.log(event.target.value)
    this.setState({
      roomCode:event.target.value
    })
}
// to use js code use {}
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} align = "center">
          <Typography variant="h4" gutterBottom marginTop ={25}>
            ENTER ROOM CODE:
          </Typography>
        </Grid>
        <Grid item xs={12} align = "center">
            <TextField
                error={this.state.error}
                // id="outlined-error-helper-text"
                // label="Code"
                placeholder="Ex: ABCDE"
                helperText={this.state.error}
                onChange={this.handleRoomCodeChange}
            />
        </Grid>

        <Grid item xs={12} align = "center">
          <Button variant="contained" onClick={this.handleJoinRoomButtonPressed}>Join Room</Button>
        </Grid>
        <Grid item xs={12} align = "center">
          <Button variant="contained" color="error">Back</Button>
        </Grid>
        
      </Grid>
    );
  }
}

// add back button and submit button
// create backend framework and send response