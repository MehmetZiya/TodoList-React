import { useContext, useState} from 'react' ;
import { useHistory} from 'react-router-dom' ;
import { TodoContext } from '../context/TodoContext';

const Addtodo = () => {
    const { addTodo } = useContext(TodoContext)
    const [name, setName] = useState()
    const [todo, setTodo] = useState()
    const [done] = useState(false)
    const [time] = useState(new Date().toLocaleString())
    const history = useHistory()


    return ( 
        <div>
            <hr/>
            <h2>To Do Form</h2>
            <form onSubmit={ (event) => addTodo(event, name, todo, time,done, history)} className="todo-form">
                <input 
                    type="text"
                    placeholder="Write your name"
                    required
                    id="name"
                    onChange= {(event)=> setName(event.target.value)}/>
                
                <input 
                    type="text"
                    placeholder="Enter what to do"
                    required
                    id="todo"
                    onChange={(event) => setTodo(event.target.value)}/>
                <button className="add-todo-btn" type="submit">Add</button>

            </form>
        </div> 
    );
}
 
export default Addtodo;