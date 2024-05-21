export const RECEIVEDFILTER = 'RECEIVEDFILTER'
export const PURCEHASED = 'PURCEHASED'
export const RETFILETER = 'RETFILETER'
export const FILTERDATASOUCE = 'FILTERDATASOUCE'
export const EGIFTITEMREGION = 'EGIFTITEMREGION'
export const EGiftReceivedFilterAction = data => ({
  type: RECEIVEDFILTER,
  data,
})
export const EGiftPurchasedFilterAction = data => ({ type: PURCEHASED, data })
export const EGiftResetFilterAction = data => ({ type: RETFILETER, data })
export const EGiftFilterDataSourceAction = data => ({
  type: FILTERDATASOUCE,
  data,
})
export const EGiftItemSelectRegion = data => ({ type: EGIFTITEMREGION, data })
