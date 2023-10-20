import React, { useState } from 'react'
import UserContext from './UserContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../main'

const UserContextProvider = ({ children }) => {

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }
  
const value = {
     signUp,
     login
}

  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider