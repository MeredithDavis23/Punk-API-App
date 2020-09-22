import React from 'react';
import './App.css';
import Beer from './beers/beer'
import './beers/Beer.css'
// import Heart from 'react-animated-heart'


class App extends React.Component {
  constructor(props) {
    super(props) 

  this.state = {
    isClicked: false,
    beers: []
  }
  // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
      // console.log("something happened")
      fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(data => 
        this.setState({
          beers: data
        }))
    }

    // componentDidUpdate() {
    //   console.log('BEERS', this.state.beers)
    // }

    handleClick = () => {
    this.setState({
      isClicked: true
    })

  }

  render() {
  return (
    <div className="App">
      <h1 className="app_title">Pub API</h1>
      <ul className="beer__list">
      {this.state.beers.map((beer => 
        <Beer handleClick={this.handleClick} beer={beer} />
      ))}
      </ul>
    </div>
    )
  }
  
}

export default App;

