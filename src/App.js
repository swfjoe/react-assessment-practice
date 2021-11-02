import './App.css';


import axios from 'axios';
import {useState, useEffect} from 'react';
import TodoList from "./Components/TodoList";
import TodoCreator from "./Components/TodoCreator";


function App() {
    const [todoList, setTodoList] = useState([]);

    const getTodoList = () => {
        axios.get("http://localhost:3001/api/items")
            .then((response) => setTodoList(response.data))
    }

    const deleteTodoItem = (event, itemId) => {
        event.preventDefault();
        axios.delete(`http://localhost:3001/api/items/${itemId}`)
            .then(console.log)
            .then(getTodoList)
    }

    const createTodoItem = (event, newTodoItem) => {
        event.preventDefault();
        axios.post("http://localhost:3001/api/items", newTodoItem)
            .then(console.log)
            .then(getTodoList)
    }

    const updateTodoItem = (event, updatedItem) => {
        event.preventDefault();
        axios.patch(`http://localhost:3001/api/items/${updatedItem.id}`, updatedItem)
            .then(console.log)
            .then(getTodoList)
    }

    useEffect(() => {
        getTodoList();
    }, []);


    return (
        <div className="App">
            To Do List:
            <TodoList
                todoList={todoList}
                deleteTodoItem={deleteTodoItem}
                updateTodoItem={updateTodoItem}
            />
            <TodoCreator
                createTodoItem={createTodoItem}
            />
        </div>
    );
}

export default App;
