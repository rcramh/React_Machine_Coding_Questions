
const TodoList = ({todoList}) => {
    console.log(todoList)
    return (
        <div>
            {
            todoList && todoList.map((item)=>(
                <div key={item.id}>
                    {item.task}
                </div>
            ))
            }
        </div>
    )
}

export default TodoList;