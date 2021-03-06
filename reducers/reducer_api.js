import { FETCH_API } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_API:
      return [ action.payload.data, ...state ]
  }
  return state
}
