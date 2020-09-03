import {
  LOAD_ALL_CHARACTERS,
  LOAD_CHARACTER,
  LOAD_CHARACTER_COMICS,
  FILTER_CHARACTERS,
  CLOSE_CHARACTER_DIALOG,
  UPDATE_CURRENT_PAGE,
  UPDATE_PAGINATOR,
} from '../types'

export const loadAllCharacters = (page) => ({
  type: LOAD_ALL_CHARACTERS.REQUEST,
  page: page,
})

export const loadCharacterById = (character) => ({
  type: LOAD_CHARACTER.REQUEST,
  payload: character,
})

export const loadCharacterComics = (characterId, offset = 0) => ({
  type: LOAD_CHARACTER_COMICS.REQUEST,
  characterId: characterId,
  offset: offset,
})

export const closeCharacterDialog = () => ({
  type: CLOSE_CHARACTER_DIALOG,
})

export const filterResults = (filter) => ({
  type: FILTER_CHARACTERS.REQUEST,
  payload: filter,
})

export const clearFilter = () => ({
  type: FILTER_CHARACTERS.CANCEL,
})

export function updateCurrentPage(currentPage) {
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: {
      currentPage,
    },
  }
}

export function updatePaginator(pagination) {
  return {
    type: UPDATE_PAGINATOR,
    payload: {
      ...pagination,
    },
  }
}
