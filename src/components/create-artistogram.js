import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import './create-artistogram.css';

export default function CreateArtistogram(props) {
  return (
    <div id="create">
      <h1>Artistogram</h1>
      <form>
        <fieldset>
          <legend>Enter your favourite musician or band to create an Artistogram</legend>
          <div>
            <input type="text" />
            <input type="submit" />
          </div>
        </fieldset>
      </form>
    </div>
  )
}