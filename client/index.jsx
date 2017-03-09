import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        What up world
        <Chat />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('entry'));
