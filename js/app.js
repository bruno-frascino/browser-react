'use strict';

const e = React.createElement;

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'h1',
      {},
      'Hello People'
    );
  }
}

class MessageAndLikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return [
      e(
        'h1',
        {},
        'Hello People'
      ),  
      e(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Like'
      ),
    ]
  }
}


const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
// root.render(e(MessageAndLikeButton));
root.render(e(HelloWorld));