import React from "react";
import Nav from "./Nav";
import "./style.css";

function Home(){
    return (
        <>
       
            <div className="home">
      <Nav></Nav><br></br>
               <strong> This is Home page</strong>
<br />
                <strong>click on student to view data</strong>
            </div></>
    );
};
export default Home;