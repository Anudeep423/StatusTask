import React,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {callApi} from "./ApiCall"

const Task = () => {

    const [values,setValues] = useState({Name : "" , priority : ""  , date : "",  dueDate : new Date() , TaskStatus : "To DO" , Backend : ""   })

    const {Name,priority,date,dueDate,taskStatus,TaskStatus} = values

    const handleChange = (e) => {
            
      setValues({...values,[e.target.name] : e.target.value })
  
  }

    const handleDate = (date) => {
        setValues({...values,dueDate : date})
    }

    const handleSubmit = () => {  
      callApi({ Name , Priority : priority , Date : new Date() , DueDate : dueDate , TaskStatus  }).then(data => {
        if(data.error){
            console.log(data.error)
            return ""
        }else{
          setValues({...values,Backend  : data  })
              console.log(data)
            }
    })
    }

    return (   <>
            <h1>Task Component</h1>
        <span>Name : </span> 
        <input  name = "Name"  onChange = {handleChange} value = {Name} placeholder=" Enter Name" />
        <br></br>
        <h1>Priority : {priority} </h1>
        <select name = "priority" onChange = {  handleChange}  >
  <option value="High">High</option>
  <option value="Medium">Medium</option>
  <option value="Low">Low</option>
</select>
<h1>Pick a Date</h1>
<DatePicker
selected = {dueDate}
onChange = {  
 
  (date) => {handleDate(date)} }
            required
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            showMonthDropdown
            className="input"
          />
          <h1>Task status : {TaskStatus} </h1>
          <select name="TaskStatus" value = {TaskStatus}  onChange = {handleChange}  >
  <option value="To DO">To DO</option>
  <option value="Review">Review</option>
  <option value="Completed">Completed</option>
</select>
<br></br>
<br></br>
<br></br>
<button onClick = {handleSubmit}  >Save</button>
{ values.Backend ?  <h1> DATA FROM BACKEND </h1>  : "" }
{ JSON.stringify(values.Backend)  }

        </>
    )
}

export default Task
