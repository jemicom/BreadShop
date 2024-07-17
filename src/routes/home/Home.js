import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id : 'intro', title : '성심당'},
  { id : 'new', title : '대표제품'},
  { id : 'order', title : '주문'},
  { id : 'location', title : '문의사항'},
]

const Home = () => {
  const [ activeSection, setActiveSection ] = useState(0)
  const [ showTooltip, setShowTooltip ] = useState(null)
  const sectionRefs = useRef(sections.map(()=>React.createRef()))
  // ref  4개 생성 

  useEffect(()=>{
      const handleScroll = ()=>{
        const pageYOffset = window.pageYOffset;

        let newActiveSection = 0; 
        sectionRefs.current.forEach((ref, index)=>{
          if(ref.current.offsetTop <= pageYOffset + 100){
            newActiveSection = index
          }
          // console.log( newActiveSection )
        })

        setActiveSection( newActiveSection )
      }

      window.addEventListener('scroll', handleScroll);
      return ()=> window.removeEventListener('scroll', handleScroll)
  }, [])


  const scrollToSection = (index)=>{
    sectionRefs.current[index].current.scrollIntoView({
       behavior : 'smooth'
    })
  }
  return (
      <div className='relative'>
        {/* indecator */}
        <div className='fixed right-4 top-1/2 transform translate-y-1/2 z-50'> 
            {
              sections.map(( section, index )=>(
                <div   key={section.id}
                       className='relative'
                >
                    <motion.div className='w-3 h-3 rounded-full cursor-pointer overflow-hidden'>
                      <AnimatePresence>
                        {section.title}
                        <div className='bg-red-200 w-3 h-3'
                            onClick={()=>scrollToSection(index)}
                        ></div>
                      </AnimatePresence>
                    </motion.div>
                </div>
              ))
            }  
        </div>

        {/* sections */}
        {
          sections.map((section, index)=>(
            <motion.section key={section.id}
                            ref={ sectionRefs.current[index] }
                            className='h-screen w-full'
            >
             section, {  index }
            </motion.section>
          ))
        }
      </div>
  )
}

export default Home