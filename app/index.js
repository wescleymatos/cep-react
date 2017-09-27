import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cep: '59080105',
      logradouro: ''
    };
  }

  componentDidMount() {
    this.getAddress(this.state.cep);
  }

  getAddress(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(address => this.setState({ logradouro: address.logradouro }));
  }

  render() {
    return (
      <div>Olá React {this.state.logradouro}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
