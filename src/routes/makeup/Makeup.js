import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

// sidebar
// sidebar 한번만 사용할 때 
// const Makeup = () => {
//   return (
//     <div className='w-10/12 m-auto flex'>
//         <Sidebar />
//         <div>Makeup 게시판</div>
//     </div>
//   )
// }

// sidebar를 여러번 사용할려면 layout을 만들어 사용 
// animation layout 인데 HOC 패턴 
const Makeup = () => {
  return (
    <div> Makeup 게시판 </div>
  )
}

export default Makeup