import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
  const [inputNumber, setInputNumber] = useState('')

 // console.log(inputNumber)

 const handleClick=() =>{
  console.log('inside of handleclick',inputNumber.length)
 }
  return (
    <>

        <h1>Welcome to the number to text Application</h1>

        
        <TextField id="outlined-basic" onChange={(e) =>setInputNumber(e.target.value)} label="Enter your number" variant="outlined" />
<br/>
        <Button variant="contained" onClick={handleClick}>Convert to Text</Button>
       
  
      
    </>
  )
}

export default App
