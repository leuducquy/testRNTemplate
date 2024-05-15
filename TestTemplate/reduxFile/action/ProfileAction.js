/**
 * 获取所有Address
 */
export const TYPE_ACTION_GET_ALL_CUSTOMER_ADDRESS =
  'TYPE_ACTION_GET_ALL_CUSTOMER_ADDRESS'
/**
 * 获取用户信息
 */
export const TYPE_ACTION_GET_CUSTOMER_INFO = 'TYPE_ACTION_GET_CUSTOMER_INFO'

export function actionGetAllCustomerAddress(addressList) {
  return {
    type: TYPE_ACTION_GET_ALL_CUSTOMER_ADDRESS,
    addressList,
  }
}

export function actionGetCustomerInfo(customerInfo) {
  return {
    type: TYPE_ACTION_GET_CUSTOMER_INFO,
    customerInfo,
  }
}
