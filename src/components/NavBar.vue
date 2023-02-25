<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/buscar">Buscar</router-link>
    <router-link to="/buscar/cedula">Buscar por cedula</router-link>
    <router-link to="/insertar">Insertar</router-link>
    <router-link to="/actualizar">Actualizar</router-link>
    <router-link to="/eliminar">Eliminar</router-link>

    <!--
    <a href="/">Home</a>
    <a href="/buscar">Buscar</a>
    <a href="/insertar">Insertar</a>
    <a href="/actualizar">Actualizar</a>
    <a href="/elminar">Eliminar</a>-->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    div a{
        color:aqua;
        margin: 0 15px;
    }

    div .router-link-active{
        color:cornflowerblue
    }

</style>