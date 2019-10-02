import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      players: ["O", "X"]
    };
  }

  handleClick = (i) => {
    const squares = [...this.state.squares]
    squares[i] = this.state.players[0]
    this.setState({squares: squares})
    let players = this.state.players.reverse()
    this.setState({players: players})
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} handleClick={() => this.handleClick(i)} />
  }

  render() {
    const status = "Next player: " + this.state.players[0];

    return (
      <div>
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
