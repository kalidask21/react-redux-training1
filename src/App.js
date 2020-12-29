import logo from './logo.svg';
import './App.css';
import NewTodo from './todos/NewTodo'
import TodoList from './todos/TodoList'
function App() {
  return (
    <div className="App">
       <NewTodo />
       {/* <TodoList todo={[{
         text : 'Hi'
       }]}/> */}
    </div>
  );
}

export default App;
