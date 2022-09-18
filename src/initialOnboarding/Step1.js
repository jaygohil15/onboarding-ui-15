import './Step1.css';

const Step1 = (props) => {

   const handleSubmit = (e) => {
      e.preventDefault()
      props.setStepCounter(prevState => prevState + 1)
   }

   return (
      <>
         <p className='heading'>Welcome! First things first...</p>
         <p className='sub-heading'>You can always change them later.</p>
         <form className="form" onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input id='name' type='text' placeholder="Steve Jobs" />
            <label htmlFor='displayName'>Display Name</label>
            <input id='displayName' type='text' placeholder="Steve" />
            <button type='submit'>Create Workspace</button>
         </form>
      </>
   )
}

export default Step1;