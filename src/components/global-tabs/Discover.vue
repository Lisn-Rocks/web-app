<template>
  <div>
    <section class="global-tab-header">
      <div class="global-tab-search-holder">
        <span class="material-icons global-tab-search">search</span>
      </div>
      <div class="global-tab-title-holder">
        <h1 class="global-tab-title">Discover</h1>
      </div>
    </section>

    <TileCarousel :albums="albums"/>
    <SongsList :songs="songs"/>
  </div>
</template>

<script>
import TileCarousel from '../universal/TileCarousel.vue'
import SongsList from '../universal/SongsList.vue'
import { Chamber } from '../../classes/Chamber.js'
import Config from '../../config.js'

export default {
  name: 'Discover',

  components: {
    TileCarousel,
    SongsList
  },

  data() {
    return {
      songs: new Chamber(),
      albums: [ 20, 59, 1 ]
    }
  },

  created() {
    for (let i = 0; i < 10; i++)
      this.fetchRandomSong()
  },

  methods: {
    async fetchRandomSong() {
      let r = await fetch(
        `${Config.ROUTE}/api/random`,
        { method: 'GET', redirect: 'follow'}
      )

      let json = await r.json()

      // Loading chamber here so as to allow calls to fetchRandomSong to be
      // completely asynchronous. If we were to return json data, caller would
      // have to await, which harms concurrency.
      this.songs.load(json)
    }
  }
}
</script>
