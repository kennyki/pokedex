<template lang='pug'>
  #app
    pokedex
</template>

<script>
import pokedex from './components/pokedex'

export default {
  name: 'app',
  components: {
    pokedex
  }
}
</script>

<style lang='scss'>
@import './styles/app';
</style>
