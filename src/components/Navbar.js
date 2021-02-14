import {Link} from "react-router-dom" ;


const Navbar = () => {
    return ( 
        <nav className="nav">
            <Link to="/">Todo's</Link>
            
            <Link to="/addtodo">Add Todo</Link>
            
            <Link to="/about">About</Link>
        </nav>
     );
}
 
export default Navbar;