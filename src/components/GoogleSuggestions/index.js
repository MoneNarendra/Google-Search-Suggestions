import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {userInput: ''}

  userInputValue = event => {
    this.setState({userInput: event.target.value})
  }

  changeInput = suggestion => {
    this.setState({userInput: suggestion})
  }

  render() {
    const {userInput} = this.state
    const {suggestionsList} = this.props

    const filteredList = suggestionsList.filter(eachSugg =>
      eachSugg.suggestion.toLowerCase().includes(userInput.toLocaleLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="inner-constiner">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              className="google-image"
              alt="google logo"
            />
          </div>
          <div className="search-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-img"
                alt="search icon"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search Google"
                onChange={this.userInputValue}
                value={userInput}
              />
            </div>
            <ul className="list-search-items">
              {filteredList.map(eachItem => (
                <SuggestionItem
                  eachItem={eachItem}
                  key={eachItem.id}
                  changeInput={this.changeInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
