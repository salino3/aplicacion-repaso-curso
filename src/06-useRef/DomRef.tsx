import React, {useEffect, useRef} from 'react';

const DomRef = () => {
  
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      inputRef.current?.focus()
   
      
    }, [])
    

  return (
    <>
       <input title='title' type="text"  ref={inputRef}/> 

    </>
  )
}

export default DomRef