import React, { useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'
import useAuth from './Context/useAuth'

export default function Private() {
  const {user} = useAuth()
  const location = useLocation()
  const path = location.pathname

  if (!user){
    return <Navigate to='/login' state={{pr:'private', path:path}}/>
  }

  return (
    <Outlet/>
  )
}
