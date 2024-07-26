import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const SidebarLayout = ({children}) => {
  return (
    <div className='w-10/12 m-auto flex'>
        <Sidebar />
        { children }
    </div>
  )
}

export default SidebarLayout