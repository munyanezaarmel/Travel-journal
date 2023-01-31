
import React,{useState} from "react"
import '../src/index.css';
const Form =()=>{
const [formData,setFormData]=useState({

    email:"",
    password:"",
    confirmPassword:"",
    checkbox:false,
    employment:""

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
function handleSubmit(){
    e.preventDefault()
    console.log(formData)
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
   <input type="radio" id="unemployed" onChange={handleChange} name='employment' checked={formData.employment="unemployed"} /><br />
   <label htmlFor="employed"></label>employed
   <input type="radio" id="employed" onChange={handleChange} name='employment' checked={formData.employment="employed"}  />
   </fieldset>
            <button onClick={handleSubmit}>Sign up</button><br />
            </form>
        </div>
    )
}
export default Form