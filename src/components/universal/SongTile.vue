<template>
  <a class="tile"
    :class="{active: active}"
    @click="$emit('select', song.id)"
  >
    <div class="info">
      <h4 class="title">{{ song.name }}</h4>
      <h6 class="artist">{{ song.artist }}</h6>
    </div>
  </a>
</template>

<script>
export default {
  name: 'SongTile',
  props: {
    song: Object,
    active: Boolean
  }
}
</script>

<style scoped>
.tile {
  display: flex;
  height: var(--song-tile-height);
  color: var(--main-color);
  padding: 0 var(--standard-horizontal-padding);
  cursor: pointer;
  transition: all 0.2s;
}

.tile .info {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tile .info .title {
  font-size: var(--song-title-font-size);
  font-weight: 600;
}
.tile .info .artist {
  font-size: var(--song-artist-font-size);
  font-weight: 400;
  color: var(--main-color-light);
}

.active .info .title {
  font-weight: 700;
  transition: all 0.2s;
}
.active .info .artist {
  font-weight: 500;
  transition: all 0.2s;
}
</style>
