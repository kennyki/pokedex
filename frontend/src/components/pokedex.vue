<template lang='pug'>
.container
  .jumbotron.text-center
    h1 Welcome to the Pokedex!
    div(v-if='!isLoading')
      button.btn.btn-primary(@click='showLegendary = !showLegendary')
        span(v-if='showLegendary') Show me everything
        span(v-else) Show only Legendary!
  .text-center(v-if='isLoading')
    em Loading...
  .text-center.text-danger(v-else-if='error')
    strong {{ error.message }}
    p {{ error.errors }}
  table.table(v-else)
    thead
      tr
        th(v-for='column in columns') {{ column }}
    tbody
      tr(v-for='pokemon in displayPokemons',
          :class='[pokemon["Legendary"] === "True" ? "success" : ""]')
        td(v-for='column in columns')
          span(v-if='column === "Legendary"') {{ pokemon[column] === 'True' ? 'Yes' : 'No' }}
          span(v-else) {{ pokemon[column] || '-' }}
</template>

<script>
import axios from 'axios'

export default {
  name: 'pokedex',
  data () {
    return {
      isLoading: true,
      error: null,
      showLegendary: false,
      pokemons: {
        all: [],
        legendary: []
      },
      columns: [
        '#',
        'Name',
        'Type 1',
        'Type 2',
        'Total',
        'HP',
        'Attack',
        'Defense',
        'Sp Atk',
        'Sp Def',
        'Speed',
        'Generation',
        'Legendary'
      ]
    }
  },
  computed: {
    displayPokemons () {
      return this.showLegendary ? this.pokemons.legendary : this.pokemons.all
    }
  },
  created () {
    axios.get('/api/pokemons').then((response) => {
      this.pokemons.all = response.data || []
      this.isLoading = false
      this.findLegendaryPokemons()
    }).catch((e) => {
      this.error = e
      this.isLoading = false
    })
  },
  methods: {
    findLegendaryPokemons () {
      this.pokemons.legendary = this.pokemons.all.reduce((list, pokemon) => {
        if (pokemon['Legendary'] === 'True') {
          list.push(pokemon)
        }
        return list
      }, [])
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  padding: 50px 0;
}
</style>
