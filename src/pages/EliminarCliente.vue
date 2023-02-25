<template>
    <h1>Eliminar por ID</h1>
    <input type="text" v-model="id" placeholder="Ingrese el id">
    <button v-on:click="eliminarCliente()">Eliminar</button>
  
  </template>
  
  <script>
  import {borrarIdFachada} from "../js/api_facturacion/ProcesarCliente.js"
  
  export default {
      data(){
          return{
              id: null
          }
      },
      methods:{
          async eliminarCliente(){
              await borrarIdFachada(this.id)
          }
      }
  }
  </script>
  
  <style>
  
  </style>