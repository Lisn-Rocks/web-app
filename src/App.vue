<template>
  <div id="app">

    <!-- Tabs -->
    <Discover
      class="global-tab"
      v-show="activeTabID === tabs.Discover.id"
    />
    <Library
      class="global-tab"
      v-show="activeTabID === tabs.Library.id"
    />
    <Favorites
      class="global-tab"
      v-show="activeTabID === tabs.Favorites.id"
    />

    <Navbar
      :tabs="tabs" :activeTabID="activeTabID"
      @jmptab="activeTabID = $event"
    />
  </div>
</template>

<script>
/* Components */
import Discover from './components/global-tabs/Discover.vue'
import Library from './components/global-tabs/Library.vue'
import Favorites from './components/global-tabs/Favorites.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Discover,
    Library,
    Favorites,
    Navbar
  },

  data () {
    return {
      tabs: {
        Discover: {
          id: 0,
          name: 'Discover',
          icon: 'whatshot'
        },
        Library: {
          id: 1,
          name: 'Library',
          icon: 'home'
        },
        Favorites: {
          id: 2,
          name: 'Favorites',
          icon: 'favorite'
        }
      },
      activeTabID: 0
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
}

:root {
  /* Color Palette */
  --white-secondary: #EEEEEE;
  --white-ternary: #CCCCCC;

  --main-color-light: #4F5B62;
  --main-color: #263238;
  --main-color-dark: #000A12;

  --accent-color-light: #FF5983;
  --accent-color: #F50057;

  /* Fonts */
  --montserrat: 'Montserrat', sans-serif;
  --open-sans: 'Open Sans', sans-serif;

  /* General */
  --standard-horizontal-padding: 20px;
  --bigger-horizontal-padding: 30px;

  /* Tabs */
  --tab-padding-bottom: calc( var(--navbar-height) );
  --tab-height: calc( 100vh - var(--tab-padding-bottom) );

  /* Navbar */
  --navbar-height: 60px;
  --navbar-sideways-padding: 40px;
  --navbar-font-size: 30px;

  /* Main Section */
  --main-section-height: 100vh;

  /* Song Tile */
  --song-tile-height: 60px;
  --song-title-font-size: 16px;
  --song-artist-font-size: 12px;

  /* Player Minimized */
  --player-minimized-height: 65px;
}

#app {
  position: relative;
}

.global-tab {
  font-family: var(--open-sans);
  height: var(--tab-height);
  padding-bottom: var(--tab-padding-bottom);
}
.global-tab-header {
  background-color: var(--white-secondary);
  color: var(--main-color-dark);
}
.global-tab-search-holder {
  text-align: right;
}
.global-tab-search {
  padding: var(--bigger-horizontal-padding);
  padding-bottom: 7px;
  cursor: pointer;
}
.global-tab-title-holder {
  padding: var(--standard-horizontal-padding) var(--bigger-horizontal-padding);
}
.global-tab-title {
  font-family: var(--montserrat);
  font-size: 28px;
}

/*
 * These rules must be removed as soon as Library and Favorites come out of
 * their development phase.
 */
.dev {
  margin-top: calc( 3 * var(--standard-horizontal-padding) );
  padding: var(--standard-horizontal-padding);
  text-align: center;
}
.dev h3 {
  margin-bottom: var(--standard-horizontal-padding);
}
/******************************************************************************/
</style>
