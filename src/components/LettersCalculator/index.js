import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    lengthInput: '',
  }

  OnCalcalatorLetter = event => {
    const trigerEvent = event.target.value
    this.setState({lengthInput: trigerEvent})
  }

  render() {
    const {lengthInput} = this.state
    return (
      <div className="bg-container">
        <div className="card-Calculator">
          <div className="input-container">
            <h1 className="heading-calculate">
              Calculate the Letters you Enter
            </h1>
            <div className="label-container">
              <label htmlFor="name" className="input-label">
                Enter the phrase
              </label>
              <input
                type="text"
                className="input-search-layout"
                id="name"
                placeholder="Enter the phrase"
                onChange={this.OnCalcalatorLetter}
              />
            </div>
            <p className="no-letter-description">
              No.of letters: {lengthInput.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-Element"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
