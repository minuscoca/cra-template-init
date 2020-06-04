import ActionTypes from './ActionTypes'
import * as appAcitons from 'redux/app/actions'

function delay (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function dummyRequest (result, ms) {
  await delay(ms)
  return result
}

export function fetchUser () {
  const dummyData = {
    user: {
      firstName: 'John',
      lastName: 'Goldenburg',
      gender: 'male',
      age: 30,
    },
  }
  
  return async (dispatch, getState) => {
    dispatch(appAcitons.updateUserLoginLoading(true))
    const user = await dummyRequest(dummyData.user, 2000)
    dispatch({
      type: ActionTypes.FETCH_USER,
      payload: { user },
    })
    dispatch(appAcitons.updateUserLoginLoading(false))
  }
}

export function resetUser () {
  return (dispatch, getState) => {
    dispatch(appAcitons.updateUserLoginLoading(true))
    dispatch({
      type: ActionTypes.RESET_USER,
    })
    dispatch(appAcitons.updateUserLoginLoading(false))
  }
}
