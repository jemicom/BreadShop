import React, { useState } from 'react'
import { IoChevronDownCircleSharp } from "react-icons/io5";
import res from '../../models/chicor_sidebar.json'

const CheckItem = ({item}) => {
  const [ checked, isChecked ] = useState(false)

  return (
    <div className='flex gap-2 items-center'
         onClick={ ()=>isChecked(!checked)}
    > 
        <IoChevronDownCircleSharp color={ !checked ? '#dfdfdf' : 'black' }/>
        <span className={`${ !checked ? '' : 'underline' }`}>{item}</span> 
    </div>
  )
}

const CircleColor = ({item})=>{
    return (
        <div className='flex gap-2 items-center'>
            <div className={`w-4 h-4 rounded-full`}
                style={{ background : item.bg_color}}
            ></div>
            <span>{item.color_name}</span> 
        </div>
    )
}

 
const FilterSection = ({title, isOpen, toggleOpen, children})=>(
    <div className='border-b border-gray-200 py-4'>
        <button onClick={toggleOpen}
             className='flex justify-between w-full items-center pb-2'  
        >
            <span>{title}</span>
            <span className='text-xl'>{ isOpen ? "-" : "+"}</span>
        </button>
        {
            isOpen && children
        }
    </div>
)
 
const Sidebar = () => {
    const [openSections, setOpenSections] = useState({
        brand : true, 
        colors : true, 
        suncare : true, 
        texture : true, 
        concerns : true, 
        skeinType : true, 
        price : true, 
    })

    // console.log( {...openSections})
    const toggleSection = (section)=>{
        setOpenSections(prev=>({...prev, [section] : !prev[section]}))
    }


  return (
    <div className='w-[200px]'> 
            <style  jsx  global>{`
                .custom-scrollbar::-webkit-scrollbar{
                    width:6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track{
                    background:#f1f2f2;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb{
                    background:#777;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover{
                    background:#333; 
                }
            `}</style>

            <FilterSection title="brand"
                           isOpen={openSections.brand}
                           toggleOpen={()=>toggleSection('brand')}
            > 
                <div className='w-full h-40 overflow-x-hidden  custom-scrollbar'>
                    {
                        res.brands.map(item=><CheckItem key={item}  item={item} />)
                    }
                </div>
            </FilterSection>

            <FilterSection title="colors"
                           isOpen={openSections.colors}
                           toggleOpen={()=>toggleSection('colors')}
            > 
                <div>
                    {
                        res.colors.map(item=><CircleColor key={item.color_names}  item={item} />)
                    }
                </div>
            </FilterSection>

            <FilterSection title="제형"
                           isOpen={openSections.texture}
                           toggleOpen={()=>toggleSection('texture')}
            > 
                <div className='w-full h-40 overflow-x-hidden  custom-scrollbar'>
                    {
                        res.texture.map(item=><CheckItem key={item}  item={item} />)
                    }
                </div>
            </FilterSection>
            
    </div>
  )
}

export default Sidebar