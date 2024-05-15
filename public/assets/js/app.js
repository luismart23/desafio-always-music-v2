const todosLosEstudiantes = document.querySelector('#todosLosEstudiantes')
const formularioAgregarEstudiante = document.querySelector('#formularioAgregarEstudiante')
const formularioEditarEstudiante = document.querySelector('#formularioEditarEstudiante')

const exampleModal = document.querySelector('#exampleModal')
const myModal = new bootstrap.Modal(exampleModal)

const URL_DOMAIN = "http://localhost:3000/api/v1"

formularioAgregarEstudiante.addEventListener('submit', async (event) => {
    event.preventDefault()
    const nombre = event.target.nombre.value
    const curso = event.target.curso.value
    const nivel = event.target.nivel.value

    // tarea validar los inputs
    if (!nombre.trim() || !curso.trim() || !nivel.trim()) {
        return alert('campos obligatorios')
    }

    try {
        await axios.post(URL_DOMAIN + '/estudiantes', {
            nombre, curso, nivel
        })
        obtenerEstudiantes()
    } catch (error) {
        console.log(error)
        alert(error?.response?.data?.msg)
    }
})

const obtenerEstudiantes = async () => {
    try {
        const { data: estudiantes } = await axios.get(URL_DOMAIN + '/estudiantes')
        todosLosEstudiantes.innerHTML = ''
        estudiantes.forEach(estudiante => {
            todosLosEstudiantes.innerHTML += /*html*/`
            <li class="list-group-item">
                <div class="mb-2">
                    Nombre: ${estudiante.nombre} 
                    - curso: ${estudiante.curso} 
                    - nivel: ${estudiante.nivel}
                </div>
                <div>
                    <button 
                        onclick="eliminarEstudiante('${estudiante.id}')" 
                        class="btn btn-danger btn-sm">Eliminar</button>
                    <button 
                        onclick="editarEstudiante('${estudiante.id}')" 
                        class="btn btn-warning btn-sm">Editar</button>
                </div>
            </li>
            `
        })
    } catch (error) {
        console.log(error)
        alert(error?.response?.data?.msg)
    }
}

obtenerEstudiantes()

const eliminarEstudiante = async (id) => {
    console.log('me estás eliminando...', id)
    try {
        if (confirm('Estás seguro que quieres eliminar el estudiante?')) {
            await axios.delete(URL_DOMAIN + '/estudiantes/' + id)
            obtenerEstudiantes()
        }
    } catch (error) {
        alert(error?.response?.data?.msg)
    }
}

const editarEstudiante = async (id) => {
    try {
        const { data: estudiante } = await axios.get(URL_DOMAIN + '/estudiantes/' + id)

        // agregar los input según los elementos del estudiante
        formularioEditarEstudiante.nombre.value = estudiante.nombre
        formularioEditarEstudiante.curso.value = estudiante.curso
        formularioEditarEstudiante.nivel.value = estudiante.nivel
        formularioEditarEstudiante.idEstudiante.value = estudiante.id

        myModal.show()
    } catch (error) {
        alert(error?.response?.data?.msg)
    }
}

formularioEditarEstudiante.addEventListener('submit', async (event) => {
    try {
        event.preventDefault()

        const nombre = event.target.nombre.value
        const curso = event.target.curso.value
        const nivel = event.target.nivel.value
        const idEstudiante = event.target.idEstudiante.value

        await axios.put(URL_DOMAIN + '/estudiantes/' + idEstudiante, {
            nombre, curso, nivel
        })
        obtenerEstudiantes()
        myModal.hide()
    } catch (error) {
        alert(error?.response?.data?.msg)
    }
})
