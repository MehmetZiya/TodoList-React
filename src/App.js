import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import TodoContextProvider from './context/TodoContext';
import Todos from './pages/Todos' ;
import Addtodo from './pages/Addtodo' ;
import About from './pages/About' ;


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <TodoContextProvider>
          <Route exact path="/" component={Todos} />
          
          <Route exact path="/addtodo" component={Addtodo} />
          
          <Route exact path="/about" component={About} />
        </TodoContextProvider>
        
      </Router>
    </div>
  );
}

export default App;
