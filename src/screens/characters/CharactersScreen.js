/* eslint-disable flowtype/require-valid-file-annotation */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { Pagination, Row, Col } from 'antd'
import { Loader, CardInfo } from '../../global/components'
import { loadAllCharacters, loadCharacterById, filterResults, clearFilter } from '../../store/actions'

const styleSheet = createStyleSheet('CharactersScreen', (theme) => ({
  container: {
    padding: (theme.spacing.unit * 2),
  },
  itemCard: {
    display: 'flex',
  },
}))

const CharactersScreen = ({ classes, characters, loadCharacterById, loadAllCharacters }) => {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchChar = (func, page) => {
      console.log('passou no fetchChar no useEffect')
      func(page)
      setCurrentPage(page)
    }
    console.log('effect')
    fetchChar(loadAllCharacters, currentPage)
  }, [currentPage])

  const onPageChange = (page) => {
    console.log('passei no onPageChange')
    console.log('page', page)
    console.log('statePage', currentPage)
    setCurrentPage(page)
  }

  // const onClearPress = (event) => {
  //   event.preventDefault()
  //   this.setState({ searchText: '' }, () => {
  //     clearFilter()
  //   })
  // }

  const renderItems = () => {
    return characters.map(item => (
      <Grid key={item.id} item xs={12} sm={4} md={2} lg={2} className={classes.itemCard}>
        <CardInfo item={item} onPress={() => loadCharacterById(item)} />
      </Grid>
    ))
  }

  return (
    <div>
      <Grid container className={classes.contentCards} align={'center'}>
        { renderItems() }
      </Grid>
      <div>
        <Pagination
          onChange={(pageNumber) => onPageChange(pageNumber)}
          current={currentPage}
          defaultCurrent={1}
          total={90}
        />
      </div>
    </div>
  )
}

CharactersScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  loadCharacterById: PropTypes.func,
  loadAllCharacters: PropTypes.func,
  characters: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  characters: state.app.characters.items,
})

const enhance = compose(
  withStyles(styleSheet),
  connect(mapStateToProps, { loadAllCharacters, loadCharacterById, filterResults, clearFilter }),
)

export default enhance(CharactersScreen)
