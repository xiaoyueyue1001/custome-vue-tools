<template>
  <div id="app">
    <h1>自定义Vue组件</h1>
    <div id="nav">
      <router-link to="/MapCanvas">MapCanvas</router-link>
      <router-link to="/CircleProgressBar">CircleProgressBar</router-link>
      <router-link to="/select-all">带全选下拉框</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  a {
    margin: 0 50px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
