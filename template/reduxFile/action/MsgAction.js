/**
 * 是否有未读消息
 */
export const TYPE_ACTION_HAS_UNREAD_MSG = 'TYPE_ACTION_HAS_UNREAD_MSG'

export function actionHasUnreadMsg(hasUnreadMsg) {
  return {
    type: TYPE_ACTION_HAS_UNREAD_MSG,
    hasUnreadMsg,
  }
}
