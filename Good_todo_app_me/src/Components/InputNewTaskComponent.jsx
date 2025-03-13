import { useState } from "react"

const InputNewTaskComponent = ({todoList,setToList}) => {

    const [input, setInput] = useState('')

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleAddTodoButtonClick = (newTodoItem) => {
        let updatedTodoList = [...todoList , {id :Date.now(), task : newTodoItem}];
        setToList(updatedTodoList);
      }

    return (
        <div>
            <input 
                type="text"
                onChange={handleInputChange}
             />
            <button
                onClick={ () => {
                        handleAddTodoButtonClick(input);
                        setInput('');
                    }}
            >
                Add
            </button>
        </div>
    )
}

export default InputNewTaskComponent;