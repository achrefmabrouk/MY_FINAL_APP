import React from 'react'
import { useSelector } from 'react-redux'

import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth = localStorage.getItem('isAuth')
    const accepet = useSelector(state=>state.manager.msg)
  return (
  
    ((isAuth ? children :<Navigate to ='/Login'/>) || (accepet==='Now , you are a manager')?children : <Navigate to ='/Register'/> )

  )
}

export default PrivateRoute
