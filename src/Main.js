import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Characters from './screens/characters'
import Header from './components/header'
import DetailsModal from './components/modal'

const styleSheet = createStyleSheet('Main', () => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  navbarContainer: {
    flexGrow: 0,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 66,
    overflowY: 'scroll',
  },
}))

const Main = ({ classes }) => {

  return (
    <div className={classes.root}>
      <DetailsModal />
      <div className={classes.navbarContainer}>
        <Header />
      </div>
      <div className={classes.contentWrapper}>
        <DetailsModal />
        <Characters />
      </div>
    </div>
  )
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(Main)
