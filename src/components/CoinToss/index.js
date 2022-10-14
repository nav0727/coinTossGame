import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))

    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prev => ({
        heads: prev.heads + 1,
        url: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prev => ({
        tails: prev.tails + 1,
        url: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {heads, tails, url} = this.state
    const count = heads + tails
    return (
      <div className="bg">
        <div className="bg1">
          <h1> Coin Toss Game</h1>

          <p className="desc"> Heads (or) Tails</p>

          <img src={url} alt="toss result" className="image" />

          <button type="button" onClick={this.onIncrement} className="btn">
            Toss Coin
          </button>

          <div className="bgc">
            <p>Total: {count}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
