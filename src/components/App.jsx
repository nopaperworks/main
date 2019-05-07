import React from 'react'

import AppHeader from './AppHeader'
import AppContent from './AppContent'
import AppFooter from './AppFooter'

import Container from './commons/Container'

import './_app.scss'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    return (
      <main className='app'>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </main>
    )
  }
}

export default App