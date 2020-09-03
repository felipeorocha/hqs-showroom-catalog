import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Search from '../search'

const styleSheet = createStyleSheet('Header', (theme) => ({
  root: {
    width: '100%',
  },
  logo: {
    marginRight: theme.spacing.unit,
  },
  flex: {
    flex: 1,
  },
  orderWidget: {
    marginRight: theme.spacing.unit,
  },
  topBar: {
    [theme.breakpoints.up('md')]: {
      height: 48,
    },
    [theme.breakpoints.only('xs')]: {
      height: 'auto',
      padding: theme.spacing.unit,
    },
  },
  toolbarRoot: {
    [theme.breakpoints.only('xs')]: {
      height: 'auto',
      flexDirection: 'column',
    },
  },
  leftContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
}))

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        classes={{
          root: classes.topBar,
        }}
      >
        <Toolbar className={classes.toolbarRoot}>
          <div className={classes.leftContent}>
            <Typography type="subheading" color="inherit">
              Marvel Characters
            </Typography>
          </div>
          <div className={classes.rightContent}>
            <Search />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(Header)
