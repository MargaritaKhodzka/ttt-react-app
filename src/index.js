import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// React.Component subclass
class Square extends React.Component {
    // React components can have state by setting this.state in their constructors
    constructor(props) {
        // In JavaScript classes, super should be called when defining the constructor of a subclass
        super(props);
        // initialize the state
        this.state = {
            value: null,
        };
    }

    // render method returns a description of what you want to see on the screen
    render() {
      return (
        // display the current state’s value when clicked
        <button 
            className="square" 
            onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }
}
  
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

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
  
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
  