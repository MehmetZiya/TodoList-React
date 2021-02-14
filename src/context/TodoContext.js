import {createContext, useState, useEffect} from "react" ;


export const TodoContext  = createContext();

const TodoContextProvider = (props) => {
    const [ todolist, setTodoList ] = useState([
        {
            id:2,
            name: "Shaun",
            todo: "Study React Hooks",
            done: false,
            time: new Date(2021, 0, 16, 10, 33, 30, 0).toLocaleString()
        },
        {
            id:1,
            name: "Mehmet",
            todo: "Learn Vue.js also",
            done:false,
            time: new Date(2021, 0, 26, 14, 11, 56, 0).toLocaleString()
        }
    ])

    const addTodo = (event , name, todo, time, done, history) => {
        event.preventDefault();
        const newTodo = {
            id: todolist[0].id +1 ,
            name,
            todo,
            done,
            time
        }
        setTodoList([newTodo, ...todolist])
        history.push("/")
        

    }
    const removeTodo = (selectedTodo) => {
        const newTodoList = todolist.filter( todo => todo.id !== selectedTodo.id)
        setTodoList(newTodoList)
    }

    const doneTodo = (selectedTodo, history) => {
        const doneTodo = todolist.filter ( todo => todo.id === selectedTodo.id)
        doneTodo[0].done = ! doneTodo[0].done
        setTodoList(todolist)
        history.push("/")
         
    }

    useEffect(() => {
        console.log("run")
    },[todolist])

    const values = {
        todolist, 
        setTodoList, 
        addTodo, 
        removeTodo,
        doneTodo

    }

    return (
        <TodoContext.Provider value={ values }>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;