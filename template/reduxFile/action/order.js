import { GETQUICKORDERINFO, ORDERDETAILMODE } from './../constant'
import OrderBusiness from '../../container/order/business/OrderBusiness'
export const TYPE_STORE_CUSTOMIZE = 'TYPE_STORE_CUSTOMIZE' //Add-in选项
export const TYPE_STORE_CONDIMENT = 'TYPE_STORE_TYPE_STORE_CONDIMENT' //Condiment选项
export const TYPE_RESETCONDIMENT = 'TYPE_RESETCONDIMENT' //重置condiment
export const TYPE_STORE_RESETCUSTOMIZE = 'TYPE_STORE_RESETCUSTOMIZE' //重置Customize选项
export const TYPE_JUMPFLAG = 'TYPE_JUMPFLAG'
export const TYPE_CLEARSTOREORDER = 'TYPE_CLEARSTOREORDER' //清空redux
export const TYPE_QUICKORDER_INDEX = 'TYPE_QUICKORDER_INDEX' //QuickOrder Index
export const TYPE_STORE_AVAILABILITY = 'TYPE_STORE_AVAILABILITY' // storeAvailability
export const TYPE_QUICK_ORDER_DISCOUNT_PRICE = 'TYPE_QUICK_ORDER_DISCOUNT_PRICE' // Quick Order Discount价格
export const TYPE_ORDER_FREE_UPGRADE_DESCRIPTION =
  'TYPE_ORDER_FREE_UPGRADE_DESCRIPTION' // Free Upgrade描述
/**
 * 选择下单方式
 */
export const TYPE_ACTION_SELECT_ORDER_MODE = 'TYPE_ACTION_SELECT_ORDER_MODE'
/**
 * 选择快速下单 模式
 */
export const TYPE_ACTION_SELECT_QUICK_ORDER_MODE =
  'TYPE_ACTION_SELECT_QUICK_ORDER_MODE'
/**
 * 获取Delivery 配送信息
 */
export const TYPE_DATA_DELIVERY_ESTIMATES = 'TYPE_DATA_DELIVERY_ESTIMATES'
/**
 * 获取 收藏商品列表
 */
export const TYPE_DATA_SAVE_ITEM_LIST = 'TYPE_DATA_SAVE_ITEM_LIST'
/**
 * 添加 收藏商品
 */
export const TYPE_DATA_ADD_SAVE_ITEM = 'TYPE_DATA_ADD_SAVE_ITEM'
/**
 * 移除 收藏商品
 */
export const TYPE_DATA_REMOVE_SAVE_ITEM = 'TYPE_DATA_REMOVE_SAVE_ITEM'
/**
 * 获取购物车中商品
 */
export const TYPE_DATA_GET_SHOPPING_CART = 'TYPE_DATA_GET_SHOPPING_CART'
/**
 * 选择的primotioncode
 */
export const TYPE_PROMOTION_CODE = 'TYPE_PROMOTION_CODE'
/**
 * 订单 补差价 金额
 */
export const TYPE_ACTION_ORDER_CHARGE = 'TYPE_ACTION_ORDER_CHARGE'
/**
 * 订单运费
 */
export const TYPE_ACTION_DELIVERY_FEE = 'TYPE_ACTION_DELIVERY_FEE'

/**
 * 选择推荐商品
 */
export const TYPE_ACTION_SELECT_RECOMMEND_PRODUCT =
  'TYPE_ACTION_SELECT_RECOMMEND_PRODUCT'

export function Customize(obj) {
  return {
    type: TYPE_STORE_CUSTOMIZE,
    data: obj,
  }
}

export function CustomizeReset() {
  return {
    type: TYPE_STORE_RESETCUSTOMIZE,
    data: {},
  }
}

export function Condiment(obj) {
  return {
    type: TYPE_STORE_CONDIMENT,
    data: obj,
  }
}

export function resetCondiment() {
  return {
    type: TYPE_RESETCONDIMENT,
  }
}

export function clearRedux() {
  return {
    type: TYPE_CLEARSTOREORDER,
    data: [],
  }
}

export function JumpFlagMethod(data) {
  return {
    type: TYPE_JUMPFLAG,
    data,
  }
}
/**
 * 选择下单方式 Action
 * @param {*} mode -- 下单方式 见OrderConstant
 * @param {*} place -- 下单地点,根据mode决定, 可能为store / address / table
 * @returns
 */
export function actionSelectOrderMode(mode, place) {
  return {
    type: TYPE_ACTION_SELECT_ORDER_MODE,
    mode,
    place,
  }
}
/**
 * 选择快捷下单方式 Action
 * @param {*} mode -- 下单方式
 * @param {*} place -- 下单地点 可能为store/address，根据mode决定
 */
export function actionSelectQuickOrderMode(mode, place) {
  return {
    type: TYPE_ACTION_SELECT_QUICK_ORDER_MODE,
    mode,
    place,
  }
}

/**
 * 获取收藏商品列表
 * @param {*} data
 * @returns
 */
export function actionSavaItemList(data) {
  return {
    type: TYPE_DATA_SAVE_ITEM_LIST,
    data,
  }
}
/**
 * 添加收藏商品
 * @param {*} item
 * @returns
 */
export function actionAddSaveItem(item) {
  return {
    type: TYPE_DATA_ADD_SAVE_ITEM,
    item,
  }
}

/**
 * 移除收藏商品
 * @param {*} item
 * @returns
 */
export function actionRemoveSaveItem(itemId) {
  return {
    type: TYPE_DATA_REMOVE_SAVE_ITEM,
    itemId,
  }
}

/**
 *  从哪里跳入到orderDetailPage
 */
export const toOrderDetailModeAction = data => ({
  type: ORDERDETAILMODE,
  data,
})
/**
 *  getQuickOrder
 *  {} 跳转到create order 有数据跳到previewMode
 */
export const getQuickOrderInfoAction = data => ({
  type: GETQUICKORDERINFO,
  data,
})

/**
 * 更新Quick Order的折扣价格
 * @param {*} data
 * @returns
 */
export const actionQuickOrderDiscountPrice = data => ({
  type: TYPE_QUICK_ORDER_DISCOUNT_PRICE,
  data,
})

/**
 * 获取Zeek的配送信息
 * @param {*} deliveryInfo
 * @returns
 */
export function deliveryEstimates(deliveryInfo) {
  return {
    type: TYPE_DATA_DELIVERY_ESTIMATES,
    deliveryInfo,
  }
}

/**
 * 保存quickOrderIndex
 */
export function storeQuickIndex(data) {
  return {
    type: TYPE_QUICKORDER_INDEX,
    data,
  }
}

export function actionGetShoppingCart(data) {
  return {
    type: TYPE_DATA_GET_SHOPPING_CART,
    data,
  }
}

/**
 * 选择的promotionCode
 * @param {*} code
 * @returns
 */
export function actionSelectedPromotionCode(code) {
  return {
    type: TYPE_PROMOTION_CODE,
    code,
  }
}
/**
 * 订单补差价金额
 * @param {*} orderCharge
 * @returns
 */
export function actionOrderCharge(orderCharge) {
  return {
    type: TYPE_ACTION_ORDER_CHARGE,
    orderCharge,
  }
}
/**
 * 订单运费
 * @param {*} deliveryFee
 * @returns
 */
export function actionDeliveryFee(deliveryFee) {
  return {
    type: TYPE_ACTION_DELIVERY_FEE,
    deliveryFee,
  }
}

/**
 *  StoreAvailability action
 *
 */
function actionStoreAvailability(data) {
  return {
    type: TYPE_STORE_AVAILABILITY,
    data,
  }
}

/**
 * 选择 首页推荐商品
 * @param {*} itemCode -- 商品的itemCode
 * @returns
 */
export function actionSelectRecommendProduct(itemCode) {
  return {
    type: TYPE_ACTION_SELECT_RECOMMEND_PRODUCT,
    itemCode,
  }
}
export const actionStoreAvailabilityDispatch = data => {
  const { params } = data
  return dispacth => {
    dispacth(actionStoreAvailability({ ...data, status: 'pendding' }))
    Promise.all([
      OrderBusiness.doGetRecommandPruduct(
        params.storeId,
        params.type,
        params.storeNum,
      ),
    ])
      .then(res => {
        const recommendList = res[0]
        dispacth(
          actionStoreAvailability({
            ...data,
            ...recommendList,
            status: 'success',
          }),
        )
      })
      .catch(err => {
        dispacth(actionStoreAvailability({ ...data, status: 'error' }))
      })
  }
}

export function actionFreeUpgradeDescription(descArray) {
  return {
    type: TYPE_ORDER_FREE_UPGRADE_DESCRIPTION,
    descArray,
  }
}
