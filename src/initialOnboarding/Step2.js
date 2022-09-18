import './Step2.css';

const Step2 = (props) => {

   const handleSubmit = (e) => {
      e.preventDefault()
      props.setStepCounter(prevState => prevState + 1)
   }

   return (
      <>
         <p className='heading'>Let's setup a home for all your work</p>
         <p className='sub-heading'>You can always create another workspace later.</p>
         <form className="form" onSubmit={handleSubmit}>
            <label htmlFor='name'>Workspace Name</label>
            <input id='name' type='text' placeholder="Eden" />
            <label htmlFor='displayName'>Workspace URL <span className='blur-option'>(optional)</span></label>
            <div className='inputContainer'>
               <input id='url' type='text' value='www.eden.com/' readOnly />
               <input id='displayName' type='text' placeholder="Example" />
            </div>
            <button type='submit'>Create Workspace</button>
         </form>
      </>
   )
}

export default Step2;