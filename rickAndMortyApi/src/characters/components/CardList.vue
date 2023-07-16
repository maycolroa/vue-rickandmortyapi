<script setup lang="ts" >
import rickAndMortyApi from '../../api/rickAndMortyApi';

rickAndMortyApi.get('/character')
  .then( resp => {
    console.log({result: resp.data.results[1] });
  })

</script>

<template>
  <ul>
    <li>hola</li>
    <li>hola</li>
    <li>hola</li>
  </ul>
</template>

<style scoped>
</style>
