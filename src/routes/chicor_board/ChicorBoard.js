import React from 'react'
import board from '../../models/board.json'

// 코드 복사 
// tailwind 로 다음 게시판 디자인 해줘
// 3번째 td 모바일에서만 숨겨줘
// 2번째 td 모바일에서는 90 프로 차지하고 , 그이상 브레이크포인트 80프로만 차지함 
// 문자 사이즈도 따라서 조정해줘 
 
const ChicorBoard = () => {
  return (
    <div className='w-10/12 flex flex-col justify-center items-between'>
        <h1>ChicorBoard</h1>
        <table >
            {
                board.map((item, index)=><tr key={item.id} >
                    <td className='w-10 lg:w-20'>{item.id}</td>
                    <td className='w-10 md:w-80 lg:w-96'>{item.content}</td>
                    <td className='hidden  md:block'>{item.date}</td>
                </tr>)
            }
        </table>
    </div>
  )
}

export default ChicorBoard