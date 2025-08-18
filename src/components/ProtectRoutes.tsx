import React from 'react'
import { Navigate } from 'react-router-dom'


interface ProtectRoutesProps {
    children: React.ReactNode
}
const ProtectRoutes = ({children}:ProtectRoutesProps) => {
    //check for token in the local storage
 const isAuthenticated = localStorage.getItem('token')
  if (!isAuthenticated) {

    return <Navigate to="/login" />
  }
    return (
    <div>
        {/* This is where the children will be rendered components wraaped inside */}
{children}



    </div>
  )
}

export default ProtectRoutes