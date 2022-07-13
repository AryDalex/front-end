async function apiCreateTask(description, completion) {
    const url = 'http://localhost:3000/tasks' // const url = 'http://[::1]:3000/tasks'
    const newTask = {description, completion}

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(newTask)
    }
    const response = await fetch(url, options)
    console.log(response)
}

apiCreateTask("Tarefa de Teste", false)