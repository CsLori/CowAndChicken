import React, { Component } from 'react';

class Player extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render() {
    return (
      <form onSubmit={e => this.handleForm(e)}>
        <label>
          Cow
          <input type="radio" name="player" value="Cow" />
        </label>
        <label>
          Chicken
          <input type="radio" name="player" value="Chicken" />
        </label>
        <input id="submit" type="submit" value="Let the game begin" />
      </form>
    );
  }
}

export default Player;
