import './index.css'

const BrowserHistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistoryIcon = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item-container">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
        <div className="history-content-container">
          <div className="history-item-details">
            <img src={logoUrl} alt="domain logo" className="domain-logo" />
            <div className="history-content">
              <p className="title">{title}</p>
              <p className="domain-url">{domainUrl}</p>
            </div>
          </div>
          <div className="history-delete-container">
            <button
              type="button"
              className="delete-button"
              data-testid="delete"
              onClick={onDeleteHistoryIcon}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
                className="delete-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
