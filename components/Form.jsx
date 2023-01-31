
import React,{useState} from "react"
import '../src/index.css';
const Form =()=>{
const [formData,setFormData]=useState({

    email:"",
    password:"",
    confirmPassword:"",
    checkbox:false,
    employment:"",
    favColor:""

})
console.log(formData)

function handleChange(event){
    const {name,value,type,checked}=event.target
    setFormData((prev)=>{
        return{
         ...prev,
            [name]:type==="checkbox" ? checked:value
        }
    })
}
function handleSubmit(event){
    event.preventDefault()
    if(formData.confirmPassword==formData.password){
        console.log("account created successful")
    }
    else{
        console.log("password do not match")
        return
    }
  if(formData.checkbox){
    console.log("thanks for signiup to our newslatter")
  }
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>form</h1>
            <input type="text" placeholder="enter email" name="email" onChange={handleChange} value={formData.email} /><br />
            <input type="password" placeholder="enter password" name="password" onChange={handleChange} value={formData.password} /><br />
            <input type="password" placeholder="re-enter password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} /><br />
            <label htmlFor="checked">i want to join this newslatter</label>
            <input type="checkbox" name="checkbox"onChange={handleChange}  id="checked" checked={formData.checkbox} />
            <fieldset>
   <label htmlFor="unemployed">unemployed</label>
   <input type="radio" id="unemployed" onChange={handleChange} name='employment' checked={formData.employment==="unemployed"} /><br />
   <label htmlFor="employed"></label>employed
   <input type="radio" id="employed" onChange={handleChange} name='employment' checked={formData.employment==="employed"}  />
   </fieldset>
   <select name="favColor" id="favColor" onChange={handleChange}>
    <option value="">---choose---</option>
    <option value="yellow">Yellow</option>
    <option value="blue">Blue</option>
   </select>
            <button onClick={handleSubmit}>Sign up</button><br />
            </form>
        </div>
    )
}
export default Form