import React from 'react' 
import BreadItem from './BreadItem'

const Breads = () => {

  const breads = []  // 0~26
  for(let a=0 ; a<27 ; a++){
    breads.push({ id:a, title : `bread title ${a}`})
  }
  
  return (
    <div>
        {
            breads.map(bread=><BreadItem bread={bread}/>)
        }
    </div>
  )
}

export default Breads