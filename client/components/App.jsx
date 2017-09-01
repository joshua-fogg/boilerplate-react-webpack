import React, { Component } from 'react'

import { getQuote } from '../Api'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quote: "",
    }
    this.setQuote = this.setQuote.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleOnClick(e) {
    getQuote(this.setQuote)
  }

  setQuote(err, quoted) {
    this.setState({ quote: quoted }, () => console.log('setquote', quoted))
  }

  render() {
    return (
      <div id='page'>
        <div className='title'><h1> Tronald Dump Quote Generator</h1></div>
        <div className='trump-button'>
          <button onClick={this.handleOnClick}>
            <g src='./ronaldo-dumpster.svg' />
          </button>
        </div>
        <div className='quote'>
          <p>
            {this.state.quote}
          </p>
        </div>

      </div >
    )
  }
}

export default App

