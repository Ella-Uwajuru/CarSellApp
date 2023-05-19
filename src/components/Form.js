import React,{useState, useEffect} from 'react'

const Form = () => {
    const[formData,setFormData]=useState("");

    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());
    setFormData(formObject);
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  
  return (
    <div className='body'>
        <h2>Welcome to our car sell app </h2>
      <form className='form' onSubmit={handleSubmit}>
       <label htmlFor='car-make'>Car Make :</label> <br/>
       <input type='text' name='car-make' id='car-make' required  />
       <br/>
       <label htmlFor='car-model'>Car Model :</label> <br/>
       <input type='text' name='car-model' id='car-model' required  />
       <br/>
       <label htmlFor='year'>Year :</label> <br/>
       <input type='date' name='year' id='year' required />
       <br/>
       <label htmlFor='mileage'>Mileage :</label> <br/>
       <input type='number' name='mileage' id='mileage' required />
       <br/>
       <label htmlFor='condition'>Condition :</label> <br/>
       <input type='radio' name='excellent' value='excellent'   />Excellent
       <input type='radio' name='good' value='good'   /> Good
       <input type='radio' name='Fair' value='fair'  />Fair
       <input type='radio' name='poor' value='poor'  />Poor
       <br/>
       <label htmlFor='features'> Features: </label>  <br/>
       <input type='checkbox'  name='abs' id='check'  />ABS <br/>
       <input type='checkbox'  name='air-conditioning'  id='check'  />Air conditioning <br/>
       <input type='checkbox'  name='power-steering'  id='check'  />Power Steering  <br/>
       <input type='checkbox'  name='power-windows'  id='check'  />Power windows <br/>
       <input type='checkbox'  name='navigation-system'  id='check'  />Navigation system <br/>
       <br/>
       <label htmlFor='transmission'>Transmission: </label>
       <select id='select'>
        <option id='select'>select one</option>
        <option value='automatic' id='select'  >Automatic</option>
        <option value=' manual' id='select'  >Manual</option>
       </select>
       <br/>
       <label htmlFor='price'>Price Slider :</label>
       <input type='range' name='price' id='price' required  />
       <br/>
       <label htmlFor='contact'>Contact Number :</label> <br/>
       <input type='text' name='contact' id='contact' required ></input>
       <br/>
      <button type='submit'>Submit data</button>
      </form>
    </div>
  )
}

export default Form
