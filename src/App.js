import './App.css';
import TodoList from './components/ToDoList';
import TodoInput from './components/ToDoInput';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='m-5'>
    <TodoInput/>
    <TodoList/>
    </div>
  );
}

export default App;
