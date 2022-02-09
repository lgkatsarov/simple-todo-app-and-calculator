const API_URI = 'https://parseapi.back4app.com/classes/TaskList';

export async function postTask(task) {
    const response = await fetch(API_URI, {
        method: 'POST',
        headers: {
            'X-Parse-Application-Id': 'tULMddbZ54M2KvBUprgQ9M61vsovKNMoNZZHaFUo',
            'X-Parse-REST-API-Key': 'zqSfCgzizqasP82itAZ8F1BwY4CDqoGYHJPX6zvE',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    return response.json();
}

export async function updateTask(task) {
    const response = await fetch(API_URI + `/${task.objectId}`, {
        method: 'PUT',
        headers: {
            'X-Parse-Application-Id': 'tULMddbZ54M2KvBUprgQ9M61vsovKNMoNZZHaFUo',
            'X-Parse-REST-API-Key': 'zqSfCgzizqasP82itAZ8F1BwY4CDqoGYHJPX6zvE',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });

    return response.json();
}

export async function getTask(id) {

    let data = await fetch(API_URI + `/${id}`, {
        method: 'GET',
        headers: {
            'X-Parse-Application-Id': 'tULMddbZ54M2KvBUprgQ9M61vsovKNMoNZZHaFUo',
            'X-Parse-REST-API-Key': 'zqSfCgzizqasP82itAZ8F1BwY4CDqoGYHJPX6zvE'
        }
    })
    return data.json();
}

export async function deleteTask(id) {

    let data = await fetch(API_URI + `/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Parse-Application-Id': 'tULMddbZ54M2KvBUprgQ9M61vsovKNMoNZZHaFUo',
            'X-Parse-REST-API-Key': 'zqSfCgzizqasP82itAZ8F1BwY4CDqoGYHJPX6zvE'
        }
    })
    return data.json();
}

export async function getAllTasks() {

    let data = await fetch(API_URI, {
        method: 'GET',
        headers: {
            'X-Parse-Application-Id': 'tULMddbZ54M2KvBUprgQ9M61vsovKNMoNZZHaFUo',
            'X-Parse-REST-API-Key': 'zqSfCgzizqasP82itAZ8F1BwY4CDqoGYHJPX6zvE'
        }
    })
    return data.json();
}