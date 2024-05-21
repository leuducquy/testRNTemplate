export const TYPE_ACTION_SELECT_TEMP_LOCATION =
  'TYPE_ACTION_SELECT_TEMP_LOCATION'
export const TYPE_ACTION_CONFIRM_LOCATION = 'TYPE_ACTION_CONFIRM_LOCATION'

export function actionSelectTempLocation(location) {
  return {
    type: TYPE_ACTION_SELECT_TEMP_LOCATION,
    location,
  }
}

export function actionConfirmLocation(location) {
  return {
    type: TYPE_ACTION_CONFIRM_LOCATION,
    location,
  }
}
