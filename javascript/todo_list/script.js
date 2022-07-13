feather.replace()

async function apiGetTask() {
    const url = 'http://localhost:3000/tasks/' // or const url = 'http://[::1]:3000/tasks'

    const response = await fetch(url)
    if(response.status == 200) {
        console.log(await response.json())
    }
}

async function apiCreateTask(description, complete) {
    const url = 'http://localhost:3000/tasks'
    const newTask = {description, complete}

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }

    const response = await fetch(url, options)
    if(response.status == 200) {
        console.log(await response.json())
    }
}

async function apiDeleteTask(id) {
    const url = `http://localhost:3000/tasks/${id}`

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = await fetch(url, options)
    if(response.status == 204) {
        console.log(await response.json())
    }
}

async function apiPutTask(id, description, complete) {
    const url = `http://localhost:3000/tasks/${id}`
    const task = {description, complete}

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }

    const response = await fetch(url, options)
    if(response.status == 204) {
        console.log(await response)
    }
}

async function apiUpdateTask(id, complete) {
    const url = `http://localhost:3000/tasks/${id}`
    const task = {complete}

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }

    const response = await fetch(url, options)
    if(response.status == 204) {
        console.log(await response)
    }
}

apiCreateTask("Tarefa de Teste", false)

apiGetTask() // retorna a lista de tarefasQuantidade // get
apiPutTask(204, "task put", true) // put
apiUpdateTask(201, true) // patch
apiDeleteTask(163) // delete