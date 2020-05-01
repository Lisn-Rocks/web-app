<template>
  <section class="carousel">
    <div class="tile"
      :key="album" v-for="album in albums"
      :style="cover(album)"
    />
  </section>
</template>

<script>
import Config from '../../config.js'

export default {
  name: 'TileCarousel',
  props: {
    albums: Array
  },
  methods: {
    cover(songid) {
      return `background-image: url('${Config.ROUTE}/api/cover/${songid}');`
    }
  }
}
</script>

<style scoped>
.carousel {
  display: flex;
  overflow-x: scroll;
  padding: 30px;
}
.carousel .tile {
  min-width: 180px;
  height: 250px;
  border-radius: 10px;
  background-color: var(--main-color-light);
  margin-right: 30px;
  background-size: cover;
  background-position: 50%;
  -webkit-box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.30);
  -moz-box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.30);
  box-shadow: 0px 10px 25px 0px rgba(0,0,0,0.30);
}
</style>