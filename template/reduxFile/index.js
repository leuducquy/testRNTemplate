import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'

import homeReducer from './reducer/home.js'
import { createLogger } from 'redux-logger'
import { createPromise } from 'redux-promise-middleware'
import LoginReudcer from './reducer/loginReducer'

import loginUtilReducer from './reducer/loginUtilReducer'
import imageReducer from './reducer/imageReducer'

const thunkMiddleware = require('redux-thunk').thunk

const allReducers = combineReducers({
  homeReducer,
  imageReducer,
  LoginReudcer,
 
  loginUtilReducer,

})

const store = createStore(allReducers, applyMiddleware(thunkMiddleware))
export default store
