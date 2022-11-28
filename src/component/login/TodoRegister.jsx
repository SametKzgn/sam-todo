import samho from "../../img/samhi.png";
import {Link} from "react-router-dom";


const TodoRegister = () => {
  return (
      <>

          <div className="flex items-center h-screen  justify-center ">
              <div className="flex  items-center justify-center w-[350px] h-[420px]  bg-regal-black relative shadow-black shadow-lg">
                  <div className="flex gap-10 flex-col items-center justify-center gap-3 ">
                      <img src={samho} alt="logo" className="w-[150px] h-[150px] absolute top-[-35.5%]"/>
                      <p className="text-3xl font-extrabold text-amber-300">Register Here</p>
                      <p className="text-left w-full">Email</p>
                      <input placeholder="Enter Email" type="text"
                             className="w-[300px] h-[30px] bg-transparent border-0 outline-0 border-b-[0.5px] "/>
                      <p className="text-left w-full">Password</p>
                      <input placeholder="Enter Password" type="text"
                             className="w-[300px] h-[30px] bg-transparent border-0 outline-0 border-b-[0.5px]"/>
                      <Link to="/" className="bg-[#FF8C00] flex items-center justify-center w-full h-11 rounded-2xl border-0 outline-0 ">Create New Account</Link>


                  </div>

              </div></div>

      </>
  );
}
export default TodoRegister;