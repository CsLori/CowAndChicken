import React, { Component } from 'react';
import Player from './SelectPlayer';

class Status extends Component {
  handleSetPlayer(e) {
    this.props.setPlayer(e);
  }

  renderHtml() {
    const { player, winner } = this.props;
    if (winner) {
      return <h2>Winner is {player}</h2>;
    } else {
      return player ? (
        <h2>Next player is {player}</h2>
      ) : (
        <Player player={e => this.handleSetPlayer(e)} />
      );
    }
  }

  render() {
    return <span> {this.renderHtml()}</span>;
  }
}

export default Status;
