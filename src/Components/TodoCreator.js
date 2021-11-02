import { useState } from 'react';

function TodoCreator(props) {
    const [newTodoItem, setNewTodoItem] = useState({content: ""});

    return (
        <div>
            <form>
                Create New Item:
                <input
                    onChange={event => setNewTodoItem({content: event.target.value})}
                    type="text"
                    placeholder="New Item"
                    value={newTodoItem.content}
                />
                <button
                    onClick={(event) => {
                        props.createTodoItem(event, newTodoItem);
                        setNewTodoItem({content: ""});
                    }}>
                    Submit
                </button>
            </form>

        </div>
    );
}

export default TodoCreator;