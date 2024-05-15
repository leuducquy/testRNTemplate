import { CLEARLOGININFO, LOGININFO, UPDATE_LOGIN_INFO } from '../action/login'

const defaultState = {
  emaill: '',
  password: '',

}

function reduer(state = defaultState, action) {
  const { type, data } = action
  switch (type) {
    case LOGININFO:
      // let loginData = typeof data === 'string' ? JSON.parse(data) : data;
      return Object.assign({}, state, {
        emaill: data.emaill,
        password: data.password,
      
      })
    case CLEARLOGININFO:
      return defaultState
    case UPDATE_LOGIN_INFO:
      return Object.assign({}, state, { ...data })
    default:
      return state
  }
}
export default reduer
