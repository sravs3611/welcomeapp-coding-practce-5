// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <div className="content">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          {isSubscribed && <button>Subscribe</button>}
          {!isSubscribed && <button>Subscribed</button>}
        </div>
      </div>
    )
  }
}

export default Welcome
