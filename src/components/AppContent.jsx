import React from 'react'

import Container from './commons/Container'

class AppContent extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    return (
      <Container className='app-content'>
        <div className='app-page'>
          <div className='app-block block-info'>
            <h1 className='infos-title'>
              Less Paperwork.
              <br/>
              More Life.
            </h1>
            <h3 className='infos-description'>
              Read and analyze for you ﬂows of administrative information.
              <br/>
              Prompt you only about what you need to know with the right priority.
              <br/>
              When you do have to take action, make it simple and safe.
            </h3>
          </div>

          <div className='app-block block-contact'>
            <h4>
              Interested? Follow the Project!
            </h4>
            <div>
              <input className='contact-input' placeholder='Your name' />
            </div>
            <div>
              <input className='contact-input' placeholder='Your email Adress' />
            </div>
            <p>
              By clicking “Stay in touch”, you agree to the Terms of Service and Privacy Policy.
            </p>
            <button className='contact-btn'>
              Stay in Touch
            </button>
          </div>
        </div>
      </Container>
    )
  }
}

export default AppContent
