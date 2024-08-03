import React from 'react'

import '../App.scss'
type Props = {
  children: React.ReactNode
}
const LayoutAdmin = ({children}: Props) => {
  return (
   <div className="admin add">
    {children}
   </div>
  )
}

export default LayoutAdmin
