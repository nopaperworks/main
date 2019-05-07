import React from 'react'

import Container from './commons/Container'

class AppFooter extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    return (
      <Container className='app-footer'>
        <div className='app-footer-item'>
          Terms of Service
        </div>
        <div className='app-footer-item'>
          Privacy Policy
        </div>
        <div className='app-footer-spacer' />
        <div className='app-footer-item'>
          Copyright 2019, MaZe
        </div>
      </Container>
    )
  }
}

export default AppFooter
