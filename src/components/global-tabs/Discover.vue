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

    <SongsList :songs="songs"/>
  </div>
</template>

<script>
import SongsList from '../universal/SongsList.vue'
import { Chamber } from '../../classes/Chamber.js'
import Config from '../../config.js'

export default {
  name: 'Discover',

  components: {
    SongsList
  },

  data() {
    return {
      songs: new Chamber()
    }
  },

  created() {
    this.fetchRandomSongsChamber(10)
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
    },

    async fetchRandomSongsChamber(n) {
      for (let i = 0; i < n; i++)
        this.fetchRandomSong()
    }
  }
}
</script>
