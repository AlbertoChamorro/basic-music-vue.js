<template lang="pug">
    #app
      img(src='https://albertochamorro.github.io/basic-music-vue.js/dist/logo.png')
      h1 {{ appName }}
      hr
      br
      select(v-model="selectedCountryValue")
        option(v-for="country in countries" :value="country.value") {{country.name}}
      
      //- spinner(v-show="loading")
      br
      <ring-loader :loading="loading" color="#35495e" size="28px"></ring-loader>
      ul
        artist(v-for="artist in artists" :artist="artist" :key="artist.mbid")
  </template>
<script>

//import getArtists from './api'
import artistService from './api'
import Artist from './components/artist/Artist.vue'
//import Spinner from './components/Spinner.vue'
import RingLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'app',
  data () {
    return {
      appName: 'Music App',
      loading: false,
      artists: [],
      countries: [
        {
          name: 'Argentina', value: 'argentina'
        },
        {
          name: 'Colombia', value: 'colombia'
        },
        {
          name: 'España', value: 'spain'
        }
      ],
      selectedCountryValue: null
    }
  },
  methods: {
    getAll: function (){
      this.artists = []
      this.loading = true
      console.log('loading', this.loading)
      artistService.getAll(this.selectedCountryValue)
          .then(res => {            
              this.loading = false
              console.log('loading', this.loading)
              this.artists = res
          })
    }
  },
  components: {
    Artist,
    //Spinner
    RingLoader
  },
  watch: {
    selectedCountryValue: function(){
      this.getAll()
    }
  },
  mounted() {
    console.log('componente montado en el DOM...')
    this.selectedCountryValue = this.countries[0].value
    //this.getAll()
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
