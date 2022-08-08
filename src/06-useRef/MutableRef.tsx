import React, {useRef, useEffect, useState } from 'react';

const MutableRef = () => { 
 
    const [counter, setCounter] = useState(0);
    const interValRef = useRef<number | undefined>(undefined);

const stopTimer = () => {
    window.clearInterval(interValRef.current)
}
useEffect(() => {
  interValRef.current = window.setInterval(() => {
    setCounter((counter) => counter + 1);
  }, 1000);
  return () => {
    stopTimer()
    console.log('hola')
 } 
}, [])
  return (
      <div>
        Hook Counter --&gt; {counter} -  
         <button className='btn btn-warning text-white m-2' onClick={() => stopTimer()}>Stop counter</button>
      </div>
  );
}

export default MutableRef