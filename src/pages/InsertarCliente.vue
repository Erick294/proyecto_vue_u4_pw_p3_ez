<template>
  <h1>Ingreso de cliente</h1>

  <h3>Nombre:</h3>
  <input v-model="nombre" type="text" placeholder="Ingrese su nombre">

  <h3>Apellido:</h3>
  <input v-model="apellido" type="text" placeholder="Ingrese su apellido">

  <h3>Fecha de nacimiento:</h3>
  <input v-model="fechaNacimiento" type="text" placeholder="Ingrese su fecha de nacimiento">

  <h3>Cedula:</h3>
  <input v-model="cedula" type="text" placeholder="Ingrese su cedula">

  <h3>Genero:</h3>
  <input v-model="genero" type="text" placeholder="Ingrese su genero">

  <h3>Email:</h3>
  <input v-model="email" type="text" placeholder="Ingrese su email">

  <button v-on:click="insertarCliente()">Insertar</button>
</template>

<script>

import insertarFachada from "../js/api_facturacion/ProcesarCliente.js"
export default {
    data(){
        return{
            nombre: "",
            apellido: "",
            fechaNacimiento: "",
            cedula: "",
            genero: "",
            email:""
        }
    },
    methods:{
        async insertarCliente(){
            const miCliente = {
                nombre: this.nombre,
                apellido: this.apellido,
                fechaNacimiento: this.fechaNacimiento,
                cedula: this.cedula,
                genero: this.genero,
                email: this.email
            }
            await insertarFachada(miCliente)
        }
    },
    mounted(){
        console.log("Entro a la págna insertar")
        console.log(this.$route)
        console.log(this.$route.query.ciudad)
        console.log(this.$route.query.edad)
        console.log("Nuevas Impresiones")
        const{ciudad, edad} = this.$route.query
        console.log(ciudad)
    }

}
</script>

<style>
template{
    font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>