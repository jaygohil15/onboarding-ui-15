import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Step4 = (props) => {

   const handleSubmit = (e) => {
      e.preventDefault()
      props.setStepCounter(prevState => {
         if (prevState === 4)
            return 1
         return prevState + 1;
      })
   }

   return (
      <>
         <CheckCircleIcon className='icon-color' style={{ fontSize: 60 }} />
         <p className='heading'>Congratulations, Eren!</p>
         <p className='sub-heading'>You have completed onboarding, you can start using Eden!</p>
         <button onClick={handleSubmit}>Launch Eden</button>
      </>
   )
}

export default Step4;