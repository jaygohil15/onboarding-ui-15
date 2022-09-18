import './Step3.css';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';

import { useState } from 'react';

const Step3 = (props) => {

   const handleSubmit = (e) => {
      e.preventDefault()
      props.setStepCounter(prevState => prevState + 1)
   }

   const handleBorderColor = (e) => {
      e.target.style.borderColor = '#664de5'
      if (e.target.id === 'personal') {
         document.getElementById('group').style.borderColor = 'lightgray'
      } else {
         document.getElementById('personal').style.borderColor = 'lightgray'
      }
      e.target.style.borderColor = '#664de5'
      console.log(e.target.style.borderColor)
   }

   return (
      <>
         <p className='heading'>How are you planning to use Eden?</p>
         <p className='sub-heading'>We will streamline your setup accordingly.</p>
         <div className='group-container'>
            <div onClick={handleBorderColor} id='personal'>
               <PersonIcon className='icon-color' />
               <p className='group-container-heading'>For myself</p>
               <p>Write better. Think more clearly. Stay organized.</p>
            </div>
            <div onClick={handleBorderColor} id='group' >
               <GroupIcon className='icon-color' />
               <p className='group-container-heading'>With my team</p>
               <p>Wikis, docs, tasks & projects, all in one place.</p>
            </div>
         </div>
         <button onClick={handleSubmit}>Create Workspace</button>
      </>
   )
}

export default Step3;