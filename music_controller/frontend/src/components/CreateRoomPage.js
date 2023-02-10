import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default class CreateRoomPage extends Component {
  constructor(props) {
    super(props);
    this.handleRoomButtonPressed=this.handleRoomButtonPressed.bind(this)
  }
  handleVotesChanged() {
    console.log("votes button clicked")
  }
  handleGuestsCanPause() {
    console.log("guest button clicked")
  }
  handleRoomButtonPressed() {
    console.log("button pressed")

    let body = JSON.stringify({
      votes_to_skip: 3,
      guest_can_pause: true,
    })
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }

    fetch('/api/create-room', requestOptions)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
  }
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} align = "center">
          <Typography variant="h4" gutterBottom marginTop ={25}>
            Create A Room
          </Typography>
        </Grid>
        <Grid item xs={12} align = "center">
        <FormControl>
          <FormHelperText align = "center">
            <div align = "center">Guest control of playback</div>
            </FormHelperText>
          <RadioGroup align = "center"
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="true"
            name="radio-buttons-group"
            onChange={this.handleGuestsCanPause}
          >
            <FormControlLabel labelPlacement="bottom" value="true" control={<Radio />} label="Play/Pause" />
            <FormControlLabel labelPlacement="bottom" value="false" control={<Radio />} label="No Control" />
          </RadioGroup> 
        </FormControl>
        </Grid>
        

        <Grid item xs={12} align = "center">
        <FormControl>
          
          <TextField type="number" required = {true}             
          onChange={this.handleVotesChanged} inputProps = {{
            min: 1, style: {
              textAlign: "center"
            }
          }}/>
          <FormHelperText align = "center">
            <div align = "center">Votes required to skip</div>
          </FormHelperText>
            

        </FormControl>
        </Grid >
        <Grid item xs={12} align = "center">
          <Button variant="contained" onClick={this.handleRoomButtonPressed}>Create A Room</Button>
        </Grid>
        <Grid item xs={12} align = "center">
          <Button variant="contained" color="error">Back</Button>
        </Grid>
    </Grid>
    );
  }
}
// radio group, form control label, button
