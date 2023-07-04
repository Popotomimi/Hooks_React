import { useReducer, useState } from "react";

const HookUseReducer = () => {
    // 1 - Começando com o useReducer
    const [number = 0.15, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    // 2 - Avançando no useReducer
    const initialTasks = [
        {id: 1, text: "Fazer algo"},
        {id: 2, text: "Fazer outro algo"},
    ];

    const taskReducer = (state, action) => {
        switch (action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                };

                setTaskText("");

                return [...state, newTask];
            case "DELETE":
                return state.filter((task) => task.id !== action.id);
            default:
                return state;
        }
    }

    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchTasks({type: "ADD"});
    }

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id})
    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número</button>
        <hr />
        <h2>useReducer Avançado</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
            <input type="submit" value="Enviar" />
        </form>
        <ul>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}> {task.text} </li>
            ))}
        </ul>
        <hr />
    </div>
  )
}

export default HookUseReducer;