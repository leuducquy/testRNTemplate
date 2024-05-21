import WalletBusiness from '../../container/wallet/business/WalletBusiness'
/**
 * 进入App时调用，触发用户刷新卡片数据
 */
export const TYPE_DATA_GET_CARDS_INFO = 'TYPE_DATA_GET_CARDS_INFO'

/**
 * 获取卡片列表
 */
export const TYPE_DATA_REFRESH_CARD_LIST = 'TYPE_DATA_REFRESH_CARD_LIST'

/**
 * 添加卡片 -- 数据
 */
export const TYPE_DATA_ADD_CARD = 'TYPE_DATA_ADD_CARD'

/**
 * 选择卡片
 */
export const TYPE_SELECT_CARD = 'TYPE_SELECT_CARD'

/**
 * 修改卡片名称 -- 数据
 */
export const TYPE_DATA_MODIFY_CARD_NAME = 'TYPE_DATA_MODIFY_CARD_NAME'

/**
 * 设置默认卡片 -- 数据
 */
export const TYPE_DATA_SET_DEFAULT_CARD = 'TYPE_DATA_SET_DEFAULT_CARD'

/**
 * 移除卡片 -- 网络请求结果
 */
export const TYPE_ACTION_REMOVE_CARD = 'TYPE_ACTION_REMOVE_CARD'

/**
 * 获取到Card List的Action
 * @param {Array} cardList -- 卡片数据
 * @returns
 */
export function getCardList(cardList) {
  return {
    type: TYPE_DATA_REFRESH_CARD_LIST,
    cardList,
  }
}
/**
 * 获取刷新 Card List的Action
 *
 * @param {*} cardList -- 卡片数据
 * @returns
 */
export function actionGetCardsInfo(cardList) {
  return {
    type: TYPE_DATA_GET_CARDS_INFO,
    cardList,
  }
}

/**
 * 添加卡片 -- 获取数据
 * @param {*} cardList
 * @returns
 */
export function actionAddCardData(cardList) {
  return {
    type: TYPE_DATA_ADD_CARD,
    cardList,
  }
}

/**
 * 选择卡片
 * @param {*} cardNumber -- 选择卡片的ID
 * @returns
 */
export function selectCard(cardNumber) {
  return {
    type: TYPE_SELECT_CARD,
    cardNumber,
  }
}

/**
 * 修改卡片名称
 * @param {*} nickName
 * @returns
 */
export function actionModifyCardName(cardNumber, nickName) {
  return {
    type: TYPE_DATA_MODIFY_CARD_NAME,
    cardNumber,
    nickName,
  }
}

/**
 * 修改卡片名称 -- 数据
 * @param {*} cardNumber -- 卡片Number
 * @returns
 */
export function actionSetDefaultCardData(cardNumber) {
  return {
    type: TYPE_DATA_SET_DEFAULT_CARD,
    cardNumber,
  }
}
