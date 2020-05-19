<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.commit("loadCardStack");
  }
};
</script>

<style lang="scss">

html, body{
  margin:0;
  height:100%
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  button {
    background: white;
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    font-weight: 700;
    padding: 1rem 2rem;
    margin-bottom:1rem;
    &.dark{
      background: black;
      color: white;
    }
  }
}
</style>
