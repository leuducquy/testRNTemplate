import { ISLOGIN, PUSHNOTIPATH, PUSHNNOTICLEAR } from '../action/login'
const defaultData = {
  isCurrentLogin: false,
  pushPath: null,
}

function isLoginReducer(state = defaultData, action) {
  const { type, data } = action
  switch (type) {
    case ISLOGIN:
      return { ...state, isCurrentLogin: data }
    case PUSHNOTIPATH:
      return { ...state, pushPath: data }
    case PUSHNNOTICLEAR: {
      return { ...state, pushPath: null }
    }
    default:
      return state
  }
}
export default isLoginReducer
