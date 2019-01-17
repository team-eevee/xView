import * as types from '../constants/actionTypes';

export const createApp = (app) => {
  return (dispatch) => {
    fetch ('http://localhost:3000/createApp'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        
      })
    }
  .then(res => res.json())
  .then((app) => {
    dispatch({
      type: types.CREATE_APP,
    })
  })
  }
}

export const getApps = () => {
  return (dispatch) => {
    fetch('/getApps')
    .then(res => res.json())
    .then((res) => {

      // see what res is and take it out

      dispatch({
        type: types.GET_APPS,
        payload: apps
      })
    })
  }
}

export const companyChange = (text) => ({
  type: types.COMPANY_CHANGE,
  payload: text,
})

export const recruiterChange = (text) => ({
  type: types.RECRUITER_CHANGE,
  payload: text,
})

export const contactInfoChange = (text) => ({
  type: types.CONTACT_INFO_CHANGE,
  payload: text,
})

export const dropdownChange = (value) => ({
  type: types.DROPDOWN_CHANGE,
  payload: value,
})

export const logIn = () => ({
  // return (dispatch) => {
  //   fetch('http://localhost:3000/getuser', {
  //     method: 
  //   })
  // }
  type: types.LOG_IN,
  // payload: user,
})

export const checkLogin = () => {
  return (dispatch) => {
    fetch ('/login/checkUser')
    .then(res => res.json())
    .then((res) => {
      dispatch({
        type: types.CHECK_LOGIN,
        payload: res.loggedIn,
      })
    });
  }
}