import * as types from '../constants/actionTypes';

export const createApp = () => ({
  type: types.CREATE_APP,
})

export const getApps = () => ({
  // return (dispatch) => {
  //   fetch()
  // }
})

export const inputChange = (text) => ({
  type: types.INPUT_CHANGE,
  payload: text,
})

export const dropdownChange = (value) => ({
  type: types.DROPDOWN_CHANGE,
  payload: value,
})

export const logIn = (user) => {
  return (dispatch) => {
    fetch('http://localhost:3000/getuser', {
      method: 
    })
  }
  type: types.LOG_IN,
  payload: user,
}