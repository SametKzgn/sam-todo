import {Link} from "react-router-dom";
import {HiUserCircle} from "react-icons/hi";
import samhi from '../../img/samhi.png'

const Nav = () => {
    return (
        <>
                <div className=" fixed right-0 bottom-0">

               <Link to="/login"> <img className="h-[220px]  w-[220px]" src={samhi}/> </Link>
            </div>
        </>
    );
}

export default Nav;