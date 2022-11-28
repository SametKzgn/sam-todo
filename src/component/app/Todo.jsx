import Nav from "../nav/Nav";
import {RiAddFill} from "react-icons/ri";
import NavItem from "../nav/NavItem";
import {useEffect, useRef, useState} from "react";



const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [opened, setOpened] = useState(false);

    const taskTitle = useRef('');
    const taskSummary = useRef('');

    function createTask() {
        setTasks([
            ...tasks,
            {
                title: taskTitle.current.value,
                summary: taskSummary.current.value,
            },
        ]);

        saveTasks([
            ...tasks,
            {
                title: taskTitle.current.value,
                summary: taskSummary.current.value,
            },
        ]);
    }

    function deleteTask(index) {
        var clonedTasks = [...tasks];

        clonedTasks.splice(index, 1);

        setTasks(clonedTasks);

        saveTasks([...clonedTasks]);
    }

    function loadTasks() {
        let loadedTasks = localStorage.getItem('tasks');

        let tasks = JSON.parse(loadedTasks);

        if (tasks) {
            setTasks(tasks);
        }
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    useEffect(() => {
        loadTasks();
    }, []);
    return (

        <div className="flex flex-col justify-center items-center gap-20 h-screen">
            <div className="flex flex-row justify-center items-center gap-2">
                <input ref={taskTitle} className="w-[600px] h-[60px] rounded-xl bg-transparent border-0 outline-0 border-[0.5px]"
                       type="search"/>
                <RiAddFill onClick={()=> {
                    createTask()
                    setOpened(true);
                }} className="text-5xl rounded-full bg-amber-500 text-black"/>
            </div>
            <div className="flex gap-7 flex-wrap w-4/5 justify-center ">
            {tasks.map((task, index) => (
                <NavItem key={index} task={task} index={index} deleteTask={deleteTask}/>

            ) , tasks)}

            </div>

            <Nav/>
        </div>
    );
}

export default Todo;
