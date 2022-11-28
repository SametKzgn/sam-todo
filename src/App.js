import './App.css';
import Todo from "./component/app/Todo";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoLogin from "./component/login/TodoLogin";
import TodoRegister from "./component/login/TodoRegister";

function App() {
    return (

        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Todo/>}/>
                <Route path="/login" element={<TodoLogin/>}/>
                <Route path="/register" element={<TodoRegister/>}/>
                <Route path="*" element={<p className="text-8xl text-red-600 flex items-center justify-center h-screen">404 Not Found</p>}/>
            </Routes>
        </BrowserRouter>


    );
}

export default App;
