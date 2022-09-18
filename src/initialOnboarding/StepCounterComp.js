
import { useEffect } from 'react';
import './StepCounterComp.css'

const StepCounterComp = (props) => {

   useEffect(() => {
      const child = document.getElementsByClassName('step-counter-container')[0].children
      changeColor(child)
   }, [props.stepCounter])

   const changeColor = (child) => {

      for (let i = 0; i < props.stepCounter * 2; i += 1) {
         if (!child[i]) break;
         if (child[i].className === 'step') {
            child[i].style.backgroundColor = '#664de5';
            child[i].style.color = 'white';
         } else {
            child[i].style.borderTop = '1px solid #664de5'
         }
         console.log(child[i])
      }
   }

   return (
      <div className='step-counter-container'>
         <div className='step' >1</div>
         <div className='line'></div>
         <div className='step' >2</div>
         <div className='line'></div>
         <div className='step' >3</div>
         <div className='line'></div>
         <div className='step' >4</div>
      </div>
   )
}

export default StepCounterComp;