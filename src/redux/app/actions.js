import ActionTypes from './ActionTypes'

export function resetApp() {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.RESET_APP,
    })
  }
}

export function updateUserLoginLoading(bool) {
  return (dispatch, getState) => {
    dispatch({
      type: ActionTypes.UPDATE_USER_LOGIN_LOADING,
      payload: { bool },
    })
  }
}