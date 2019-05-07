import React from 'react'

import Container from './commons/Container'

class AppHeader extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    return (
      <Container className='app-header'>
        <a
          href='https://nopaperworks.github.io/'
          className='app-header-item'>
          <i class='icon fas fa-envelope-open-text'></i>
          NoPaperWorks
        </a>
        <div className='app-header-spacer'>
        </div>
        <div className='app-header-item'>
          Our Story
        </div>
        <div className='app-header-item'>
          Features
        </div>
        <div className='app-header-item'>
          FAQ
        </div>
      </Container>
    )
  }
}

export default AppHeader
