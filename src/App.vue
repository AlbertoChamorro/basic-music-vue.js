<template lang="pug">
    #app
      img(src='./assets/logo.png')
      h1 {{ appName }}
      ul
        artist(v-for="artist in artists" :artist="artist" :key="artist.mbid")
  </template>
<script>

//import getArtists from './api'
import artistService from './api'
import Artist from './components/artist/Artist.vue'

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
  components: {
    Artist
  },
  mounted() {
    console.log('componente montado en el DOM...')
    this.getAll()
  }
}
</script>

<style lang="stylus" scoped>
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
