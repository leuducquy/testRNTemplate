
import { HOMEDATA, HOME_LOADING ,FIRST_TIME} from '../constant.js'
// action 返回一个action对象
export const addNumAction = data => ({ type: '', data })
//
export const getHomeDataAction = data => ({ type: HOMEDATA, data })
//
export const setHomeLoadingAction = data => ({ type: HOME_LOADING, data })
// 异步action 返回一个函数
export const getHomeDataActionAync = dispatch => {
  service
    .get('home')
    .then(res => {
      console.log('res----', res.data.users)
      dispatch(getHomeDataAction(res.data.users))
    })
    .catch(reason => {
      console.log('res----error ' + reason)
    })
}

export const addFirstTime = data => ({ type: FIRST_TIME, data })