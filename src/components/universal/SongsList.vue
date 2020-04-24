<template>
  <section>
    <SongTile
      :key="song.id" v-for="song in songs.chamber"
      :active="songs.current != null && songs.current.id === song.id"
      :song="song" @select="songs.select($event)"
    />
  </section>
</template>

<script>
import SongTile from './SongTile.vue'
import { Chamber } from '../../classes/Chamber.js'

export default {
  name: 'SongsList',

  components: {
    SongTile
  },

  props: {
    songs: Chamber
  }
}
</script>

<style scoped>
section {
  margin-top: 5px;
}
</style>