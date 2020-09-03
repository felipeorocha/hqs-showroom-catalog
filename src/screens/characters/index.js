import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'
import Card from '../../components/card'
import Loader from '../../components/loader'
import { loadAllCharacters, loadCharacterById, filterResults, clearFilter, updateCurrentPage } from '../../store/actions'

const styleSheet = createStyleSheet('Characters', (theme) => ({
  container: {
    padding: (theme.spacing.unit * 2),
  },
  paginator: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 40,
  },
  itemCard: {
    display: 'flex',
  },
}))

const Characters = ({ classes, characters, loadCharacterById, loadAllCharacters }) => {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [charactersPerPage] = useState(10)

  useEffect(() => {
    const fetchChar = (func, page) => {
      setLoading(true)
      func(page)
      setCurrentPage(page)
    }

    fetchChar(loadAllCharacters, currentPage)
    setLoading(false)
  }, [currentPage])

  const onPageChange = (page) => {
    setCurrentPage(page)
  }

  console.log('characters', characters)
  const indexOfLastPost = currentPage * charactersPerPage
  const indexOfFirstPost = indexOfLastPost - charactersPerPage
  const currentPost = characters.slice(indexOfFirstPost, indexOfLastPost)

  const renderItems = () => {
    return currentPost.map((item) => (
      <Grid key={item.id} item xs={12} sm={4} md={3} lg={3} className={classes.itemCard}>
        <Card item={item} onPress={() => loadCharacterById(item)} />
      </Grid>))
  }

  return (
    <div>
      <Grid container className={classes.contentCards} align={'center'}>
        { loading ? <Loader visible={loading} /> : renderItems() }
      </Grid>
      <div>
        <Pagination
          className={classes.paginator}
          onChange={(pageNumber) => onPageChange(pageNumber)}
          current={currentPage}
          defaultCurrent={1}
          total={90}
        />
        <Loader visible />
      </div>
    </div>
  )
}

Characters.propTypes = {
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
  connect(mapStateToProps, {
    loadAllCharacters,
    loadCharacterById,
    filterResults,
    clearFilter,
    updateCurrentPage,
  }),
)

export default enhance(Characters)
