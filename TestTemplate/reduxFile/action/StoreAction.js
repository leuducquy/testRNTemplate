/**
 * 刷新店铺
 */
export const TYPE_REFRESH_STORE_LIST = 'TYPE_REFRESH_STORE_LIST'
/**
 * 过滤店铺
 */
export const TYPE_FILTER_STORE_LIST = ''
/**
 * 选中店铺
 */
export const TYPE_SELECT_STORE = 'TYPE_SELECT_STORE'
/**
 * 选中店铺List类型
 */
export const TYPE_SELECT_STORE_LIST_TYPE = 'TYPE_SELECT_STORE_LIST_TYPE'
/**
 * 移动地图中心
 */
export const TYPE_MOVE_MAP_CENTER = 'TYPE_MOVE_MAP_CENTER'
/**
 * 用户当前位置
 */
export const TYPE_CURRENT_LOCATION = 'TYPE_CURRENT_LOCATION'
/**
 * 设置店铺显示Filter
 */
export const TYPE_SET_STORE_FILTER = 'TYPE_SET_STORE_FILTER'
/**
 * 清空店铺显示Filter
 */
export const TYPE_CLEAR_STORE_FILTER = 'TYPE_CLEAR_STORE_FILTER'
/**
 * 同步店铺显示Filter
 */
export const TYPE_SYNC_STORE_FILTER = 'TYPE_SYNC_STORE_FILTER'
/**
 * 设置店铺激活Filter
 */
export const TYPE_SET_ACTIVE_STORE_FILTER = 'TYPE_SET_ACTIVE_STORE_FILTER'
/**
 * 收藏Store -- 数据
 */
export const TYPE_DATA_ADD_FAVORITE_STORE = 'TYPE_DATA_ADD_FAVORITE_STORE'
/**
 * 取消收藏Store
 */
export const TYPE_REMOVE_FAVORITE_STORE = 'TYPE_REMOVE_FAVORITE_STORE'
/**
 * 获取 当天是否是 public holiday
 */
export const TYPE_DATA_PUBLIC_HOLIDAY = 'TYPE_DATA_PUBLIC_HOLIDAY'

/**
 * 选中店铺列表类型 -- 附近店铺
 */
export const SELECT_STORE_LIST_TYPE_NEARBY = 0
/**
 * 选中店铺列表类型 -- 收藏店铺
 */
export const SELECT_STORE_LIST_TYPE_FAVORITE = 1
/**
 * 选中店铺方式 -- 点击选中，默认方式
 */
export const SELECT_STORE_TYPE_CLICK = 0
/**
 * 选中店铺方式 -- 搜索选中
 */
export const SELECT_STORE_TYPE_SEARCH = 1

/**
 * 选中店铺List类型
 * @param {number} index
 * @returns
 */
export function selectStoreListType(index) {
  return {
    type: TYPE_SELECT_STORE_LIST_TYPE,
    index,
  }
}

/**
 * 生成刷新店铺的Action
 * @param {Array} storeList -- 店铺数据
 * @returns
 */
export function actionRefreshStoreList(storeList) {
  return {
    type: TYPE_REFRESH_STORE_LIST,
    storeList,
  }
}

/**
 * 生成过滤店铺的Action
 * @param {*} storeList
 * @returns
 */
export function actionFilterStoreList(storeList) {
  return {
    type: TYPE_FILTER_STORE_LIST,
    storeList,
  }
}

/**
 * 选中店铺
 * @param {String} storeId -- 选中店铺ID
 * @param {number} selectType -- 选中方式
 * @returns
 */
export function selectStore(storeId, selectType = 0) {
  return {
    type: TYPE_SELECT_STORE,
    store: { storeId: storeId, selectType: selectType },
  }
}

/**
 * 移动地图中心
 * @param {*} center -- 地图中心，{longitude:XXX, latitude:XXX, zoom:xxx}
 * @returns
 */
export function moveMapCenter(center) {
  return {
    type: TYPE_MOVE_MAP_CENTER,
    center,
  }
}
/**
 * 存储用户当前位置
 * @param {*} location
 */
export function currentLocation(location) {
  return {
    type: TYPE_CURRENT_LOCATION,
    location,
  }
}

/**
 * 设置 store filter
 * @param {*} filter -- {name: XXX, select : true/false}
 * @returns
 */
export function setStoreFilter(filter) {
  return {
    type: TYPE_SET_STORE_FILTER,
    filter,
  }
}

/**
 * 清空 store filter
 * @returns
 */
export function clearStoreFilter() {
  return {
    type: TYPE_CLEAR_STORE_FILTER,
  }
}
/**
 * 同步店铺显示Filter
 * @param {*} filterList
 * @returns
 */
export function syncStoreFilter(filterList) {
  return {
    type: TYPE_SYNC_STORE_FILTER,
    filterList,
  }
}

/**
 * 设置店铺激活Filter
 * @param {*} filterList -- filter list
 * @returns
 */
export function setActiveStoreFilter(filterList) {
  return {
    type: TYPE_SET_ACTIVE_STORE_FILTER,
    filterList,
  }
}

/**
 * 生成收藏店铺的Action
 * @param {string} storeId
 * @returns
 */
export function actionAddFavoriteStore(storeId) {
  return {
    type: TYPE_DATA_ADD_FAVORITE_STORE,
    storeId,
  }
}

/**
 * 生成取消收藏店铺的Action
 * @param {string} storeId
 * @returns
 */
export function actionRemoveFavoriteStore(storeId) {
  return {
    type: TYPE_REMOVE_FAVORITE_STORE,
    storeId,
  }
}

/**
 * 生成 是否是Public Holiday的Action
 * @param {*} isHoliday
 * @returns
 */
export function actionGetPublicHoliday(isHoliday) {
  return {
    type: TYPE_DATA_PUBLIC_HOLIDAY,
    isHoliday,
  }
}
