import axios from "axios";

//Metodos fachada
//Export en cada fachada permite exponerlas
export const obtenerPorCedulaFachada = async (cedula) => {
    return await obtenerPorCedula(cedula);
}

export const insertarFachada = async (body) => {
    await insertar(body);
}

export const actualizarFachada = async (id, body) => {
    return await actualizar(id, body);
}

export const buscarTodosFachada = async () => {
    return await buscarTodos()
}

export const borrarIdFachada = async (id) => {
    await borrarId(id);
}

export const borrarPorCedulaFachada = async (cedula) => {
    await borrarPorCedula(cedula);
}

//Metodos consumo CRUD
const obtenerPorCedula = (cedula) => {
    const data = axios.get(`http://localhost:8081/API/Facturacion/V1/clientes/${cedula}`).then(r=>r.data)
    console.log(data)
    return data
}

const insertar = (body) => {
    axios.post(`http://localhost:8081/API/Facturacion/V1/clientes`, body).then(r=>r.data)
}

const actualizar = (id, body) => {
    axios.put(`http://localhost:8081/API/Facturacion/V1/clientes/${id}`, body).then(r=>r.data)
}

const buscarTodos = () => {
    const data = axios.get(`http://localhost:8081/API/Facturacion/V1/clientes`).then(r=>r.data)
    return data
}

const borrarId = (id) => {
    axios.delete(`http://localhost:8081/API/Facturacion/V1/clientes/${id}`).then(r=>r.data)
}

const borrarPorCedula = (cedula) => {

}

//export default obtenerPorCedulaFachada
 