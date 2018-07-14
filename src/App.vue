<template lang="pug">
    #app
      img(src='./assets/logo.png')
      h1 {{ appName }}
      ul
        li(v-for="artist in artists") {{ artist.name }}
  </template>
<script>

//import getArtists from './api'
import artistService from './api'

export default {
  name: 'app',
  data () {
    return {
      appName: 'Music App',
      artists: []
    }
  },
  methods: {
    getAll: function (){
      artistService.getAll()
          .then(res => {
              console.log('artist -> ', res)
              this.artists = res
          })
    }
  },
  mounted() {
    console.log('componente montado en el DOM...')
    this.getAll()
  }
}
</script>

<style lang="stylus">
    #app
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e50
      margin-top 60px

    h1, h2
        font-weight normal

    ul
        list-style-type none
        padding 0

    li
        display inline-block
        margin 0 10px

    a
        color #42b983
</style>
