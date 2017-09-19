import { createSelector } from 'reselect'

/* Private */

const username = (state, props) => props.routeParams.username || ""

const slug = (state, props) => props.routeParams.slug || "activity"

const pageNumber = (state, props) => props.routeParams.pageNumber || 1

/* Exports */

export const getUsername = createSelector(
  [ username ],
  ( name ) => name
)

export const getSlug = createSelector(
  [ slug ],
  ( id ) => id
)

export const getPageNumber = createSelector(
  [ pageNumber ],
  ( id ) => id
)


