import React from 'react'

import './_container.scss'

class Container extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  buildClassName() {
    return (this.props.className)
      ? `container ${this.props.className}`
      : 'container'
  }

  render () {
    return (
      <div className={this.buildClassName()}>
        <div className='container-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container
