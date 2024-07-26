import React, { useState, useRef, useEffect } from 'react'

const menuItems = [
    {
        name : '스킨케어',
        href: 'skincare',
        subCategories : [
            {
                title : "페이셜케어",
                items : [
                    "스킨토너", "로션", "에센스/세럼", "크림/젤/밤","스킨토너", "로션", "에센스/세럼", "크림/젤/밤"
                ]
            },
            {
                title : "크린징",
                items : [
                    "크린징 스킨토너", "크린징로션", "크린징에센스/세럼", "크린징", "스크럼/필링","크린징에센스/세럼", "크린징"
                ]
            },
            {
                title : "마스크팩",
                items : [
                    "시트마스크", "크린징로션", "크린징에센스/세럼", "크린징", 
                ]
            },
            {
                title : "선케어",
                items : [
                    "선크림", "크린징로션", "크린징에센스/세럼", 
                ]
            },
        ]
    },
    {
        name : '메이크업',
        href: 'makeup',
        subCategories : [
            {
                title : "베이스메이크업",
                items : [
                    "프라이머/베이스", "스킨토너", "로션", "에센스/세럼", "크림/젤/밤","스킨토너", "로션", "에센스/세럼", "크림/젤/밤"
                ]
            },
            {
                title : "립메이크업",
                items : [
                    "립스틱", "크린징 스킨토너", "크린징로션", "크린징에센스/세럼", "크린징", "스크럼/필링","크린징에센스/세럼", "크린징"
                ]
            },
            {
                title : "아이메이크업",
                items : [
                   "아이라이너", "시트마스크", "크린징로션", "크린징에센스/세럼", "크린징", 
                ]
            },
            {
                title : "브러셔/하이라이터/쉐팅",
                items : [
                    "블러셔/치크","선크림", "크린징로션", "크린징에센스/세럼", 
                ]
            },
        ]
    },
    {
        name : '3메이크업',
        href: '#',
        subCategories : [
            {
                title : "3베이스메이크업",
                items : [
                    "프라이머/베이스", "스킨토너", "로션", "에센스/세럼", "크림/젤/밤","스킨토너", "로션", "에센스/세럼", "크림/젤/밤"
                ]
            },
            {
                title : "3립메이크업",
                items : [
                    "립스틱", "크린징 스킨토너", "크린징로션", "크린징에센스/세럼", "크린징", "스크럼/필링","크린징에센스/세럼", "크린징"
                ]
            },
            {
                title : "3아이메이크업",
                items : [
                   "아이라이너", "시트마스크", "크린징로션", "크린징에센스/세럼", "크린징", 
                ]
            },
            {
                title : "3브러셔/하이라이터/쉐팅",
                items : [
                    "블러셔/치크","선크림", "크린징로션", "크린징에센스/세럼", 
                ]
            },
        ]
    },
]
const Navbar = () => {
    const [ activeMenu, setActiveMenu ] = useState(null);
    const submenuRefs = useRef([]);
    let maxHeight = 0; 

    useEffect(()=>{
        submenuRefs.current = submenuRefs.current.slice(0, menuItems.length)
    },[])
    
    const handleMouseEnter = (index)=>{
        setActiveMenu(index) 
        if( submenuRefs.current[index] ){
            submenuRefs.current[index].style.maxHeight = `${submenuRefs.current[index].scrollHeight}px`
        }
    }
    const handleMouseLeave = (index)=>{
        setActiveMenu(null) 
        if( submenuRefs.current[index] ){
            submenuRefs.current[index].style.maxHeight = `0px`
        }
    }
  return (
    <nav className='w-full relative'>
        {/* 1pepth */}
        <div className='bg-black'>
            <div className='w-10/12 m-auto flex justify-between text-cyan-50 py-3'>
                <ul className='flex gap-10'>
                    {
                        menuItems.map((item, index)=>(
                            <li  key={item.name}
                                onMouseEnter={()=>handleMouseEnter(index)}
                                onMouseLeave={()=>handleMouseLeave(index)}
                            ><a href={item.href} key={item.name}>{item.name}</a></li>
                        ))
                    }
                </ul>
                <ul className='flex gap-10'>
                    {
                        ['BEST', 'BRANDS', 'STORY', 'DEAL', 'EVENT'].map(item=><li  key={item}><a href='#'>{item}</a></li>)   
                    }
                </ul>
            </div>
        </div>
        {/* 2depth */}
        <div className='relative'
            //  style={{ maxHeight : 0}}
        >
            {
                menuItems.map((menu, index)=>(
                   <div className='p-5'>
                    <div key={menu.name} 
                         ref={ ef => submenuRefs.current[index] = ef }
                         className='overflow-hidden absolute w-screen left-0 top-0  flex justify-center bg-red-300
                                transfrom translate-all duration-300'
                         style={{ maxHeight : 0}}
                    >
                        <div className='flex'>
                            <h3 className={`w-[300px] h-[${maxHeight}px] border border-r-indigo-500`}>{menu.name}</h3>
                            <div className='grid grid-cols-4'>
                                {
                                    menu.subCategories.map(category=>(
                                        <div>
                                            <h4>{category.title}</h4>
                                            <ul>
                                                {
                                                    category.items.map(item=><li>{item}</li>)
                                                }
                                            </ul>
                                        </div>
                                        // subCategories items
                                    ))
                                }
                            </div>
                            {/* grid end */}
                        </div>
                        {/* 제목과 subCategories */}
                    </div>
                   </div>
                ))
            }
        </div>        
    </nav>
  )
}

export default Navbar