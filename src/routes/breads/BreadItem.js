import React, { useState } from 'react' 
import { motion }  from 'framer-motion'

const BreadItem = ({bread}) => { 
  const [ open, setOpen ] = useState(false);

  console.log( open )
  return (
    <div>
        <div className='cursor-pointer'
              onClick={()=>setOpen(!open)}
        >BreadItem {bread.title}</div>
        {
          open && <BreadModal setOpen={setOpen} open={open} />
        }
    </div>
  )
}

// BreadDetail 대신 모달 사용
const BreadModal = ({open, setOpen})=> {
    return (
      <div className='fixed w-full h-screen bg-gray-50 left-0 top-0 flex justify-center items-center'> 
          <motion.div className='p-52 bg-white  w-[500px]  h-[300px] relative'
                      initial={{ opacity : 0 }}
                      animate={{ opacity : open && 1 }}
                      transition={{ duration:1, stiffness: 200}}
          >
              
              <div className='title absolute top-0 left-0 flex justify-between w-full'>
                <h2>bread</h2>
                <button onClick={ ()=>setOpen(false)}>닫기</button>
              </div>
              <div className='body'>
                  그림등 내용
              </div>
          </motion.div>
      </div>
    )
}

export default BreadItem