import {useState} from 'react';

function TodoItem(props) {
    const [newItemContent, setNewItemContent] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            <input
                type="checkbox"
                checked={props.todoList.completed}
                onChange={(event) => {
                    props.updateTodoItem(event, {id: props.todoList.id, completed: !props.todoList.completed})}}
            />
            {props.todoList.completed ?
                <>
                    <del>{props.todoList.content}</del>
                    <button
                        onClick={(event) => props.deleteTodoItem(event, props.todoList.id)}
                    >Delete
                    </button>
                </>
                :
                !isEditing ?
                    <>
                        {props.todoList.content}
                        <button
                            onClick={() => setIsEditing(true)}
                        >Edit
                        </button>
                    </>
                    :
                    <form>
                        Edit Item:
                        <input
                            onChange={event => setNewItemContent(event.target.value)}
                            type="text"
                            placeholder="New Item"
                            value={newItemContent.content}
                        />
                        <button
                            onClick={(event) => {
                                props.updateTodoItem(event, {id: props.todoList.id, content: newItemContent});
                                setNewItemContent({content: ""});
                                setIsEditing(false);
                            }}>
                            Submit
                        </button>
                    </form>
            }
        </div>
    );
}

export default TodoItem;