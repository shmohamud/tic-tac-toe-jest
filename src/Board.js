import React from "react";
import Square from "./Square";
import Link from "./Link";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      players: ["O", "X"]
    };
  }

  winningCombos = [
    [0, 1, 2],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8]
  ];

  isWinner = squares => {
    for (let i = 0; i < this.winningCombos.length; i++) {
      let [a, b, c] = this.winningCombos[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  handleClick = i => {
    const squares = [...this.state.squares];
    if (squares[i]) {
      alert("This square has been played, select and empty square!");
    } else {
      squares[i] = this.state.players[0];
      this.setState({ squares: squares });
      let players = this.state.players.reverse();
      this.setState({ players: players });
    }
  };

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        handleClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = this.isWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner is: " + winner;
    } else {
      status = "Next player: " + this.state.players[0];
    }
    return (
      <div>
        <Link />
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
