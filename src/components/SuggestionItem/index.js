import './index.css'

const SuggestionItem = props => {
  const {eachItem, changeInput} = props
  const {suggestion} = eachItem

  const chageSearch = () => {
    changeInput(suggestion)
  }
  return (
    <li className="list-item">
      <p className="list-name">{suggestion}</p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="list-img"
          alt="arrow"
          onClick={chageSearch}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
