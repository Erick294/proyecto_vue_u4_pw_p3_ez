<template>
  <h1>Buscar por cedula</h1>
  <input type="text" v-model="cedula">
  <button v-on:click="consultarCliente()">Buscar</button>

  <h3>Cedula: {{ cedula }}</h3>
  <h3>Nombre: {{ nombre }}</h3>
  <h3>Apellido: {{ apellido }}</h3>
  <h3>Genero: {{ genero }}</h3>
</template>

<script>
import {obtenerPorCedulaFachada, insertarFachada, actualizarFachada, borrarIdFachada} from "../js/api_facturacion/ProcesarCliente.js"

export default {
    data(){
        return{
            cedula: null,
            nombre: null,
            apellido: null,
            genero: null
        }
    },
    methods:{
        async consultarCliente(){
            const {cedula, nombre, apellido, genero} = await obtenerPorCedulaFachada(this.cedula)
            console.log(data)
            this.cedula = cedula
            this.nombre = nombre
            this.apellido = apellido
            this.genero = genero
        },
    },
    mounted(){
        console.log(this.$route)
        const {idCliente} = this.$route.params
    }
}
</script>

<style>

</style>