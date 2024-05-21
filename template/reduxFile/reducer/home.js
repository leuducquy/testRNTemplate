import { InsIcon } from '../../Screen/Components/Image.js'
import { FIRST_TIME, HOMEDATA, HOME_LOADING, TOKEN } from '../constant.js'
const defalutState = {
  homeData: {
    source:"",
    ratio:1
  },
  counter: 0,
  token: '',
  loading: true,
  isFirstTime : true
}
function reducer(preState = defalutState, action) {
  const { type, data } = action
  switch (type) {
    case HOMEDATA:
      return { ...preState, homeData: data }
    case TOKEN:
      return { ...preState, token: data }
    case HOME_LOADING:
      return { ...preState, loading: data }
      case FIRST_TIME:
        return { ...preState, isFirstTime: data }
    default:
      return preState
  }
}

export default reducer
