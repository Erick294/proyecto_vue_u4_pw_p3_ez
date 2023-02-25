<template>
    <h1>Buscar por ID</h1>
    <h2>{{ id }}</h2>
    <h2>{{ id2 }}</h2>
    <input type="text" v-model="id">
    <button v-on:click="consultarCliente()">Buscar</button>
  
    <h3>Cedula: {{ cedula }}</h3>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Apellido: {{ apellido }}</h3>
    <h3>Genero: {{ genero }}</h3>
  </template>
  
  <script>
  import {obtenerIdFachada} from "../js/api_facturacion/ProcesarCliente.js"
  
  export default {
      data(){
          return{
              id: null,
              id2: this.$route.params.idCliente,
              cedula: null,
              nombre: null,
              apellido: null,
              genero: null
          }
      },
      methods:{
          async consultarCliente(){
              const {cedula, nombre, apellido, genero} = await obtenerIdFachada(this.id)
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