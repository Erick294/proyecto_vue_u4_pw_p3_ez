<template>
  <h1>Buscar por cedula</h1>
  <input type="text" v-model="cedula">
  <button v-on:click="consultarCliente()">Buscar</button>
  <button v-on:click="insertarCliente()">Insertar</button>
  <button v-on:click="actualizarCliente()">Actualizar</button>
  <button v-on:click="eliminarCliente()">Eliminar</button>

</template>

<script>
import {obtenerPorCedulaFachada, insertarFachada, actualizarFachada, borrarIdFachada} from "../js/api_facturacion/ProcesarCliente.js"

export default {
    data(){
        return{
            cedula: null
        }
    },
    methods:{
        async consultarCliente(){
            const data = await obtenerPorCedulaFachada(this.cedula)
            console.log(data)
        },
        async insertarCliente(){
            const miCliente = {
                nombre: "Fabricio",
                apellido: "Chacon",
                fechaNacimiento: "1997-09-20T00:00:00",
                cedula: "1234567",
                genero: "Masculino",
                email:"jhksddfkjs@gmail.com"
            }
            await insertarFachada(miCliente)
        }, 
        async actualizarCliente(){
            const miCliente = {
                nombre: "Manuel",
                apellido: "Galarza",
                fechaNacimiento: "1997-09-20T00:00:00",
                cedula: "12345678",
                genero: "Masculino",
                email:"jhksddfkjs@gmail.com"
            }
            await actualizarFachada(2, miCliente)
        },
        async eliminarCliente(){
            await borrarIdFachada(2)
        }
    }
}
</script>

<style>

</style>