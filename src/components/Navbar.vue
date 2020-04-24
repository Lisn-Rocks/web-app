<template>
  <nav>
    <div
      :key="tab.id" v-for="tab in tabs"
      @click="$emit('jmptab', tab.id)"
    >
      <span
        class="material-icons"
        :class="{active: tab.id === activeTabID}"
      >
        {{ tab.icon }}
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    tabs: Object,
    activeTabID: Number
  }
}
</script>

<style scoped>
nav {
  position: fixed;
  width: calc(100vw - var(--navbar-sideways-padding) * 2);
  bottom: 0;
  display: flex;
  justify-content: space-between;
  -webkit-box-shadow: 0px -3px 20px 0px rgba(0,0,0,0.16);
  -moz-box-shadow: 0px -3px 20px 0px rgba(0,0,0,0.16);
  box-shadow: 0px -3px 20px 0px rgba(0,0,0,0.16);
  border-radius: 50px 50px 0 0;
  padding: 0 var(--navbar-sideways-padding);
  z-index: 500;
}
nav div {
  width: 35%;
  text-align: center;
  cursor: pointer;
}
nav div span {
  line-height: var(--navbar-height);
  font-size: var(--navbar-font-size);
  color: var(--white-ternary);
}
.active {
  color: var(--accent-color);
}
</style>
