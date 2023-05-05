import React, { Component } from "react";
export default class CreateRoomPage extends Component {
    constructor(props) {
      super(props);
      this.state={
        guestsCanPause: true,
        votesToSkip: 1,
        isHost: false,
      };
        this.roomCode = this.props.match.params.roomCode;
        this.FetchRoomData();

    }
    FetchRoomData() {
        fetch("/api/get-room" + "?code=" + this.roomCode)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    votesToSkip: data.votes_to_skip,
                    guestsCanPause: data.guest_can_pause,
                    isHost: data.is_host,
                });
            } );
    }
    render() {
        console.log(this.state,"_______________________")
        return (
            <div>
            <h3>{this.roomCode}</h3>
            <p>Votes To Skip: {this.state.votesToSkip}</p>
            <p>Guests Can Pause: {this.state.guestsCanPause.toString()}</p>
            <p>Host: {this.state.isHost.toString()}</p>
            </div>
        );
    }


}