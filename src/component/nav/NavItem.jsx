import {BsCheck2All} from "react-icons/bs";
import {RiDeleteBinFill,RiPencilFill} from "react-icons/ri";


const NavItem = ({task, deleteTask}) => {

 return(
         <div className="  bg-regal-black w-[300px] h-[150px] rounded-2xl flex justify-center items-center ">
             <p className="text-xl bg-transparent h-[70%] border-0">{task.title}</p>
             <div className="flex flex-row relative h-full" >
                 <div className="flex flex-row  bottom-1 right-[-30px] gap-2 absolute">
                 <BsCheck2All className="text-2xl"/>
                 <RiDeleteBinFill  onClick={() => deleteTask()} className="text-2xl"/>
                   <RiPencilFill className="text-2xl"/>
                 </div>
             </div>
     </div>
 );
}
 export default NavItem;