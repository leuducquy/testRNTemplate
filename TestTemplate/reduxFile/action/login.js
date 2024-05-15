/**
 * 登陆用户信息
 */
export const LOGININFO = 'LOGININFO'
export const ISLOGIN = 'ISLOGIN'
/**
 * 清空用户信息
 */
export const CLEARLOGININFO = 'CLEARLOGININFO'

export const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO'
export const PUSHNOTIPATH = 'PUSHNOTIPATH'
export const PUSHNNOTICLEAR = 'PUSHNNOTICLEAR'
export const loginAction = data => ({ type: LOGININFO, data })
export const exitoutAction = data => ({ type: CLEARLOGININFO, data })
export const updateLoginInfoAction = data => ({ type: UPDATE_LOGIN_INFO, data })
export const isLoginAction = data => ({ type: ISLOGIN, data })
export const savePushNotiPath = data => ({ type: PUSHNOTIPATH, data })
export const clearPushNotiPath = data => ({ type: PUSHNNOTICLEAR })
