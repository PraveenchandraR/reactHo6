import {Link} from "react-router-dom"
import "./style.css"

function Student() {
        
    // const handleOnSubmit = () => {
    // <Link to="/NewStudent"></Link>
    // }

        return (
            <div className="mainbody home">
                 <div > <Nav /></div>
            <br></br>
            <Link to="/NewStudent"><div className="btn"> Student Details <button > add new Student </button> </div><br></br></Link>
                

            </div>
        );
};
export default Student;