import React, { Component } from 'react';
import './App.css';
import Status from './components/Status';

class App extends Component {
  state = {
    board: Array(9).fill(null),
    player: null
  };

  checkWinner() {
    let winCombo = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['2', '4', '6'],
      ['0', '4', '8']
    ];
    this.checkMatch(winCombo);
  }

  checkMatch(winCombo) {
    const { board, player } = this.state;
    for (let index = 0; index < winCombo.length; index++) {
      const [a, b, c] = winCombo[index];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert('Congratulations, you won the Cow and Chicken battle!');
        this.setState({ winner: player });
      }
    }
  }

  handleClick(index) {
    const { board, player } = this.state;
    if (player && !this.state.winner) {
      let newBoard = board;
      if (board[index] === null) {
        newBoard[index] = player;
      }
      this.setState({
        board: newBoard,
        player: player === "Chicken" ? "Cow" : "Chicken",
        winner: null
      });
      this.checkWinner();
    }
  }

  setPlayer(player) {
    this.setState({
      player
    });
  }
  renderBoxes() {
    return this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));
  }
  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null)
    });
  }
  render() {
    const { winner, player } = this.state;
    return (
      <div className="container">
        <h1>Cow and Chichken</h1>
        <Status
          player={player}
          setPlayer={e => this.setPlayer(e)}
          winner={winner}
        />
        <div className="board">{this.renderBoxes()}</div>
        <button
          id="resetButton"
          disabled={!this.state.winner}
          onClick={e => this.reset(e)}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
