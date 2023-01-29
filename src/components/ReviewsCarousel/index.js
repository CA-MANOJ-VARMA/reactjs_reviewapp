// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {lineNumber: 0, length: ''}

  componentDidMount = () => {
    const {reviewsList} = this.props
    const lengthOfList = reviewsList.length
    this.setState({length: lengthOfList})
  }

  defineFunction = () => {
    const {reviewsList} = this.props
    const {lineNumber} = this.state
    console.log('rendered')
    console.log(lineNumber)
    return (
      <div className="css-review-container">
        <img
          src={reviewsList[lineNumber].imgUrl}
          alt={reviewsList[lineNumber].username}
        />
        <p>{reviewsList[lineNumber].username}</p>
        <p>{reviewsList[lineNumber].companyName}</p>
        <p>{reviewsList[lineNumber].description}</p>
      </div>
    )
  }

  rightClickButton = () => {
    const {lineNumber, length} = this.state
    if (lineNumber < length - 1 && lineNumber >= 0) {
      console.log(lineNumber)
      this.setState(prevState => ({
        lineNumber: prevState.lineNumber + 1,
      }))
    }
  }

  leftClickButton = () => {
    const {lineNumber, length} = this.state
    if (lineNumber > 0) {
      this.setState(prevState => ({
        lineNumber: prevState.lineNumber - 1,
      }))
    }
  }

  render() {
    const {lineNumber} = this.state
    console.log(lineNumber)
    return (
      <div className="css-bg-container">
        <h1>Reviews</h1>
        <div className="css-review-button-container">
          <div className="css-button-container">
            <button
              type="button"
              className="css-button-itself"
              onClick={this.leftClickButton}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="css-button-image"
              />
            </button>
          </div>
          {this.defineFunction()}
          <div className="css-button-container">
            <button
              type="button"
              className="css-button-itself"
              onClick={this.rightClickButton}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="css-button-image"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
