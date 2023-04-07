<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <el-sub-menu index="1">
      <template #title>微前端模拟</template>
      <el-menu-item-group>
          <router-link to="app-react" >

              <el-menu-item index="1-1">
                 react项目
                </el-menu-item>
          </router-link>
        <router-link to="app-vue" >
          <el-menu-item index="1-2">
            
              vue项目

            </el-menu-item>
      </router-link>
      </el-menu-item-group>
     
    </el-sub-menu>
  </el-menu>

  
</template>

<script setup>
import {
} from '@element-plus/icons-vue'

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
</style>