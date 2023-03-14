import React, { useContext } from 'react';
import "./style.css";
import { useNavigate} from "react-router-dom"
import ContextData from './ContextData';
// function NewStudent() {
//     const DataContext = useContext(ContextData);
//     const nav = useNavigate();
//     const newObj = {
//         name:"",
//         id: "",
//         age: "",
//         batch: "",
//         course:""
//     }
//     const handleOnChange = (e) => {
//         newObj[e.target.name] = e.target.value;
//         console.log(e.target.value);
//     }
//     const handleSubmit = () => {
//         DataContext.entries.push(newObj);
//         console.log(DataContext.entries);
//         nav(-1);
//     }
//     return (
//         <>
//             <h1>
//                 Add New Student Details
//         </h1>
//         <div className='new'>

import Nav from "./Nav";

    
//             <input placeholder='Enter Name' name='name' onClick={handleOnChange}></input>
        
//                 <input placeholder='enter id' name='id' onClick={handleOnChange} /><br></br>
//                 <input placeholder='enter batch' name='batch' onClick={handleOnChange} /><br></br>
//                 <input placeholder='enter course' name='course' onClick={handleOnChange} /><br></br>
//                 <input placeholder='enter age'name='age' onClick={ handleOnChange} /><br></br>
//            <button type='button' onClick={handleSubmit}>submit</button>
//             </div>
//              </>
//     )
// }
// export default NewStudent;
function NewStudent() {
    const DataContext = useContext(ContextData);
    const nav = useNavigate();
    const addObj = {
        name: " ",
        age: "",
        course: " ",
        batch: " "
    };
    const handleChange = (e) => {
        addObj[e.target.name] = e.target.value;
    };
    const handleAdd = () => {
        DataContext.entries.push(addObj);
        nav('/student');
    };
    const Cancel = () => { nav('/student') };

    return (
        <>

            <Nav />
            <label>Name:</label>
            <input placeholder='Name' name='name' onChange={handleChange} />
            <label>Age:</label>
            <input placeholder='Age' name='age' onChange={handleChange} />
            <label>Course:</label>
            <input placeholder='Course' name='course' onChange={handleChange} />
            <label>Batch:</label>
            <input placeholder='Batch' name='batch' onChange={handleChange} />
            <label>Id</label>
            <input placeholder='id' name='id'onChange={handleChange} />
            <button onClick={handleAdd}>Add Student</button>
            <button onClick={Cancel}>Cancel</button>

        </>
    );
}
export default NewStudent;