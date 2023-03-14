
import React, { useContext } from "react";


import { useLocation, useNavigate } from "react-router-dom";

import ContextData from "./ContextData";


import Nav from "./Nav";

// function Edit() {

//     const DataContext = useContext(ContextData)
//     const navigate = useNavigate();
//     const index = useLocation().state.data;
// //     const updateObj = {
// //       name:DataContext.entries[index].name,
// //   }
//     // const upDateObj = {
//     //     name: DataContext.entries[index].name,
//     //     id: DataContext.entries[index].id,
//     //     course: DataContext.entries[index].course,
//     //     batch: DataContext.entries[index].batch,
//     //     age: DataContext.entries[index].age,
//     // }
    
//     // };
//     const handleChange = (e) => {
//         // updateObj[e.target.value] = e.target.value;

  
//         // console.log(updateObj);
//     }
//     // const UpdateData = () => {
//     //     DataContext.entries[index] = upDateObj;
//     //     navigate(-1);
//     // }
//     return (
//         <>
          
//             <Nav></Nav>
//         <div>
//             <h1>Edit</h1>
//             <label>name</label>    <input name='name' placeholder="name" onChange={handleChange}/>
            
//             <label>id</label>    <input name='id' placeholder="id" onChange={handleChange}/>
//             <label>course</label>    <input name='course'placeholder="course" onChange={handleChange}/>
            
//             <label>age</label>    <input name='age' placeholder="age" onChange={handleChange}/>
            
//             <label>batch</label>    <input name='batch' placeholder="batch" onChange={handleChange} />
            
//            <button type="button">addDATA</button>
//       </div>
            
//             </>
//     );
// }
// export default Edit;

const Edit = () => {

  const EditDetails = useContext(ContextData);
    const index = useLocation().state.entries;
  const nav = useNavigate();

 

  const handleOnChange = (e) => {
    updateObj[e.target.name] = e.target.value;
    console.log(updateObj);
  }
 const updateObj = {
      //
      name:"",
    age: "",
    course: "",
     batch: "",
    id:""
  };
  const handleOnUpdate = () => {
    EditDetails.entries[index] = updateObj;
    console.log("ran successfully", EditDetails.entries[index],updateObj);
    nav('/student');
  }

  const handleOnCancel = () => {
    nav('/student');
  }

  return (
    <>
 <Nav />
    
      <fieldset>
        <legend> Name </legend>
        <input type='text' name='Name' onChange={handleOnChange}  />
      </fieldset> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <fieldset>
        <legend> Age </legend>
        <input type='text' name='Age'  onChange={handleOnChange}/>
      </fieldset>
      <br/><br/><br/>
      <fieldset>
        <legend> Course </legend>
        <input type='text' name='Course' onChange={handleOnChange}/>
      </fieldset> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <fieldset>
        <legend> Batch </legend>
        <input type='text' name='Batch'  onChange={handleOnChange}/>
          </fieldset>
          <fieldset>
        <legend> id </legend>
        <input type='text' name='id'  onChange={handleOnChange}/>
          </fieldset>
      <br/><br/><br/>
      <div className='buttons'>
        <button onClick={handleOnCancel}> Cancel </button>
        &nbsp; &nbsp; &nbsp;
        <button onClick={handleOnUpdate}> Update </button>
      </div>

    </>
  );
};

export default Edit;