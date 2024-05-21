import {
  REGISTERTYPE,
  CREATEACCOUNT,
  CREATEAPWD,
  SAVEPERSONINFO,
  SELECTCARDINFO,
  SAVEAREA,
  SAVEACARDINFO,
  BUYNEWCARD,
  REGISTER_GET_CARD_TYPE,
  SAVESECTIONTOKEN
} from '../constant'
// 注册方式
export const registerTypeAction = data => ({ type: REGISTERTYPE, data })
// 创建账号
export const createAccountAction = data => ({ type: CREATEACCOUNT, data })
// 创建密码
export const createPwdtAction = data => ({ type: CREATEAPWD, data })
// 个人信息
export const createPeronInfoAction = data => ({ type: SAVEPERSONINFO, data })
// 选择区域
export const selectAreaAction = data => ({ type: SAVEAREA, data })
// 已有卡信息
export const saveExitCardInfoAction = data => ({ type: SAVEACARDINFO, data })
// 选卡
export const selectInfoAction = data => ({ type: SELECTCARDINFO, data })
// 购买卡
export const buyACardAction = data => ({ type: BUYNEWCARD, data })

export const saveSectionToken = data => ({ type: SAVESECTIONTOKEN, data })

export const REGISTER_GET_CARD_TYPE_BUY = 1
export const REGISTER_GET_CARD_TYPE_EXIST = 0

/**
 * 注册时获取卡片方式
 * @param {*} data -- 0代表使用已有卡片，1代表购买卡片
 * @returns
 */
export const actionGetCardType = data => {
  return {
    type: REGISTER_GET_CARD_TYPE,
    data,
  }
}
