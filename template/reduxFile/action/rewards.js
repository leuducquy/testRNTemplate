export const TYPE_LOYALTYINFO = 'TYPE_LOYALTYINFO'
export const TYPE_BENELIST = 'TYPE_BENELIST'

/**
 * rewards等级
 * @param {*} data
 * @returns
 */
export function StoreLoyaltyInfo(data) {
  return {
    type: TYPE_LOYALTYINFO,
    data: data,
  }
}

export function StoreBeneList(data) {
  return {
    type: TYPE_BENELIST,
    data: data,
  }
}
