
import {

  IMAGE_BHTN_DATA,
  IMAGE_BHXH_DATA,
  IMAGE_BHYT_DATA,
  IMAGE_HOME_DATA,
  IMAGE_INS_DATA,
  IMAGE_JOIN_DETAIL_DATA,
  TOKEN,
} from '../constant.js';
const defalutState = {
  imageHomeData: {
    source: '',
    ratio: 1,
  },
  imageInsData: {
    source: '',
    ratio: 1,
  },
  imageBhxnData: {
    source: '',
    ratio: 1,
  },
  imageBhtnData: {
    source: '',
    ratio: 1,
  },
  imageBhytData: {
    source: '',
    ratio: 1,
  },
  imageJoinDetailData: {
    source: '',
    ratio: 1,
  },
  counter: 0,
  token: '',
  loading: true,
  isFirstTime: true,
};
function reducer(preState = defalutState, action) {
  const {type, data} = action;
  switch (type) {
    case IMAGE_HOME_DATA:
      return {...preState, imageHomeData: data};
    case IMAGE_INS_DATA:
      return {...preState, imageInsData: data};
    case IMAGE_BHXH_DATA:
      return {...preState, imageBhxnData: data};
    case IMAGE_BHTN_DATA:
      return {...preState, imageBhtnData: data};
    case IMAGE_BHYT_DATA:
      return {...preState, imageBhytData: data};
    case IMAGE_JOIN_DETAIL_DATA:
      return {...preState, imageJoinDetailData: data};
    case TOKEN:
      return {...preState, token: data};

    default:
      return preState;
  }
}

export default reducer;
