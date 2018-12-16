import React, { Component } from 'react';
import './main.css';
import './forms.css';
import './hex-grid.css';
import './create-artistogram.css';
import {setFocalArtistName} from '../actions'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

export class CreateArtistogram extends React.Component {

  handleSetFocalArtist(event) {
    event.preventDefault();
    this.props.dispatch(setFocalArtistName(this.textInput.value));
    this.props.history.push(`/artistogram`);
  }
  render() {

    return (

      <div id="create">
        <form onSubmit={event => this.handleSetFocalArtist(event)}>
          <fieldset>
            <legend>Enter your favourite musician or band</legend>
            <div>
              <input type="text" ref={input => this.textInput = input}/>
              <input type="submit" value="Create Artistogram" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default withRouter(connect()(CreateArtistogram));
