<template>
    <h1>Actualizar cliente</h1>
  
    <h3>Id:</h3>
    <input v-model="id" type="text" placeholder="Ingrese el id">

    <h3>Nombre:</h3>
    <input v-model="nombre" type="text" placeholder="Ingrese el nombre">
  
    <h3>Apellido:</h3>
    <input v-model="apellido" type="text" placeholder="Ingrese el apellido">
  
    <h3>Fecha de nacimiento:</h3>
    <input v-model="fechaNacimiento" type="text" placeholder="Ingrese el fecha de nacimiento">
  
    <h3>Cedula:</h3>
    <input v-model="cedula" type="text" placeholder="Ingrese el cedula">
  
    <h3>Genero:</h3>
    <input v-model="genero" type="text" placeholder="Ingrese el genero">
  
    <h3>Email:</h3>
    <input v-model="email" type="text" placeholder="Ingrese el email">
  
    <button v-on:click="actualizarCliente()">Actualizar</button>
  </template>
  
  <script>
  
  import actualizarFachada from "../js/api_facturacion/ProcesarCliente.js"
  export default {
      data(){
          return{
              id:null,
              nombre: "",
              apellido: "",
              fechaNacimiento: "",
              cedula: "",
              genero: "",
              email:""
          }
      },
      methods:{
          async actualizarCliente(){
              const miCliente = {
                  id: this.id,
                  nombre: this.nombre,
                  apellido: this.apellido,
                  fechaNacimiento: this.fechaNacimiento,
                  cedula: this.cedula,
                  genero: this.genero,
                  email: this.email
              }
              await actualizarFachada(this.id, miCliente)
          }
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