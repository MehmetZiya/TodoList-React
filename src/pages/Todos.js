
import Todo from '../components/Todo'
const Todos = () => {
    
    
    return ( 
        <div>
            <hr/>
            <div className="todo-header">
                <h2>Name</h2>
                <h2>Todo List</h2>
                <h2>Adding Time</h2>
                
            </div>
            <hr/>
            <Todo />
        </div> 
    );
}
 
export default Todos;