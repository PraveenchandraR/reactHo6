import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ContextData from "./ContextData";
import { useContext } from "react";
import Nav from "./Nav";
 
function Table() {
    const DataContext = useContext(ContextData);
    const nav = useNavigate();
    return (
        <>
              <Nav/> 
    <br/> <br/> <br/>
    <button onClick={()=>{nav('/NewStudent')}}> Add Stduent </button>
    <br/>
       
                <table border={1}
                    className="table" >
                    <thead>
                    <tr className="row">
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>batch</th>
                        <th>id</th>
                        <th>Edit</th>
                        
                        
                    </tr>
                    </thead>
                 <tbody>
                        {DataContext?.entries?.map((item,index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td>{item.id}</td>

                                <td>
                                    {/* <Link to="/editStudent" >Edit</Link> */}
                                    <Link to="/editStudent"  state={{data:index}} > Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                   
                       
            </table>
        </>
      
        
    )
}
export default Table;