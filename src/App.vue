<template>
  <div>
    <el-container>
      <el-aside>
        <Left/>
      </el-aside>
      <el-main>
        <router-view></router-view>
        <div id = "container"></div>
      </el-main>
      </el-container>
  </div>
</template>

<script>
import Left from "./components/left.vue"
export default {
  name: 'App',
  components: {
    Left
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
