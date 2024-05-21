
import { IMAGE_BHYT_DATA, IMAGE_HOME_DATA, IMAGE_INS_DATA,IMAGE_BHTN_DATA,IMAGE_BHXH_DATA,IMAGE_JOIN_DETAIL_DATA} from '../constant.js'
// action 返回一个action对象

//
export const getHomeImageDataAction = data => ({ type: IMAGE_HOME_DATA, data })
export const getInsImageDataAction = data => ({ type: IMAGE_INS_DATA, data })
export const getBhxhImageDataAction = data => ({ type: IMAGE_BHXH_DATA, data })
export const getBhtnImageDataAction = data => ({ type: IMAGE_BHTN_DATA, data })
export const getBhytImageDataAction = data => ({ type: IMAGE_BHYT_DATA, data })
export const getJoinImageDataAction = data => ({ type: IMAGE_JOIN_DETAIL_DATA, data })
//
