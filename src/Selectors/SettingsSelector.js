import { createSelector } from 'reselect'

/* Private */

const nav = (state, props) => {
  return [
    {"title":"Profile","url":"/settings/profile"},
    {"title":"Account","url":"/settings/account"}
  ]
}

/* Export */

export const getNav = createSelector(
  [ nav ],
  ( rs ) => {
    return rs
  }
)
