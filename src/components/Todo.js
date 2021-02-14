import {useContext} from 'react' ;
import {TodoContext} from '../context/TodoContext' ;
import { useHistory} from 'react-router-dom' ;
import './Todo.css' ;


const Todo = () => {

    const {todolist, removeTodo, doneTodo} = useContext(TodoContext);
    const history = useHistory()


    return ( 
        <div>
            {todolist.map(todo => {
                return(
                    <div className="todoList" key={todo.id}>
                        <h3 className={`${todo.done ? "done-todo": ""}`}>{todo.name}</h3>
                        <h3 className={`${todo.done ? "done-todo": ""}`}>{todo.todo}</h3>
                        <p className={`${todo.done ? "done-todo": ""}`}>{todo.time}</p>
                        <button onClick= {()=> doneTodo(todo, history)} className="todo-btn done">Done</button>
                        <button onClick ={ ()=> removeTodo(todo)} className="todo-btn delete">Delete</button>
                    </div>
                );
            })}
        </div>
     );
}
 
export default Todo;